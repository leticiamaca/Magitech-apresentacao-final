import { cursosAPI } from "../../../services/CursosAPI";
import { useState } from "react";
import LinkIcon from "../../../assets/Link.svg";
import LixeiraIcon from "../../../assets/Lixeira.svg";
import ModuloIcon from "../../../assets/ModuloIcon.svg";
import MusculoIcon from "../../../assets/MusculoIcon.svg";
import QuizzIcon from "../../../assets/QuizzIcon.svg";
import SalvarIcon from "../../../assets/SalvarIcon.svg";
import UploadIcon from "../../../assets/Upload.svg";
import OlhoIcon from "../../../assets/olho.svg";
import FogueteIcon from "../../../assets/Foguete.svg";
import InformacoesIcon from "../../../assets/Informacoes.svg";
import AdicionarIcon from "../../../assets/Adicionar.svg";
import DocumentIcon from "../../../assets/Documento.svg";


export default function PublicarCurso() {
    const [curso, setCurso] = useState({
        titulo: '',
        imagemCapa: null,
        modulos: [],
        maoNaMassa: { tipo: 'arquivo', conteudo: '' },
        quiz: []
    })

    const [previewImagem, setPreviewImagem] = useState(null)
    const [showPreview, setShowPreview] = useState(false)
    const [isPublishing, setIsPublishing] = useState(false)

    // Atualizado para converter para base64
    const handleImagemUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                const base64 = reader.result
                setCurso({ ...curso, imagemCapa: base64 })
                setPreviewImagem(base64)
            }
            reader.readAsDataURL(file)
        }
    }

    const adicionarModulo = () => {
        setCurso({ ...curso, modulos: [...curso.modulos, {
            id: Date.now(),
            titulo: '',
            explicacao: '',
            videoTipo: 'link',
            videoConteudo: ''
        }]})
    }

    const atualizarModulo = (id, campo, valor) => {
        setCurso({ ...curso, modulos: curso.modulos.map(mod => 
            mod.id === id ? { ...mod, [campo]: valor } : mod
        )})
    }

    const removerModulo = (id) => {
        setCurso({ ...curso, modulos: curso.modulos.filter(mod => mod.id !== id) })
    }

    const adicionarPergunta = () => {
        setCurso({ ...curso, quiz: [...curso.quiz, {
            id: Date.now(),
            pergunta: '',
            alternativas: [
                { id: 1, texto: '', correta: false },
                { id: 2, texto: '', correta: false }
            ]
        }]})
    }

    const atualizarPergunta = (perguntaId, valor) => {
        setCurso({ ...curso, quiz: curso.quiz.map(q => 
            q.id === perguntaId ? { ...q, pergunta: valor } : q
        )})
    }

    const adicionarAlternativa = (perguntaId) => {
        setCurso({ ...curso, quiz: curso.quiz.map(q => {
            if (q.id === perguntaId) {
                return { ...q, alternativas: [...q.alternativas, {
                    id: Date.now(), texto: '', correta: false
                }]}
            }
            return q
        })})
    }

    const atualizarAlternativa = (perguntaId, altId, texto) => {
        setCurso({ ...curso, quiz: curso.quiz.map(q => {
            if (q.id === perguntaId) {
                return { ...q, alternativas: q.alternativas.map(alt => 
                    alt.id === altId ? { ...alt, texto } : alt
                )}
            }
            return q
        })})
    }

    const marcarCorreta = (perguntaId, altId) => {
        setCurso({ ...curso, quiz: curso.quiz.map(q => {
            if (q.id === perguntaId) {
                return { ...q, alternativas: q.alternativas.map(alt => ({
                    ...alt, correta: alt.id === altId
                }))}
            }
            return q
        })})
    }

    const removerPergunta = (perguntaId) => {
        setCurso({ ...curso, quiz: curso.quiz.filter(q => q.id !== perguntaId) })
    }

    const removerAlternativa = (perguntaId, altId) => {
        setCurso({ ...curso, quiz: curso.quiz.map(q => {
            if (q.id === perguntaId) {
                return { ...q, alternativas: q.alternativas.filter(alt => alt.id !== altId) }
            }
            return q
        })})
    }

    const salvarRascunho = () => {
        try {
            const rascunhos = JSON.parse(localStorage.getItem('rascunhos') || '[]')
            rascunhos.push({ ...curso, savedAt: new Date().toISOString() })
            localStorage.setItem('rascunhos', JSON.stringify(rascunhos))
            alert('✅ Rascunho salvo com sucesso!')
        } catch (error) {
            alert('❌ Erro ao salvar rascunho')
        }
    }

    // NOVA FUNÇÃO - Publicar no JSON Server
    const publicarCurso = async () => {
        if (!curso.titulo) return alert('⚠️ Adicione um título')
        if (curso.modulos.length === 0) return alert('⚠️ Adicione pelo menos um módulo')
        
        setIsPublishing(true)
        try {
            const cursoPublicado = await cursosAPI.createCurso(curso)
            alert('Curso publicado com sucesso no servidor!')
            
            // Limpar formulário
            setCurso({
                titulo: '',
                imagemCapa: null,
                modulos: [],
                maoNaMassa: { tipo: 'arquivo', conteudo: '' },
                quiz: []
            })
            setPreviewImagem(null)
            
            console.log('Curso publicado:', cursoPublicado)
        } catch (error) {
            alert('❌ Erro ao publicar curso. Verifique se o servidor JSON está rodando na porta 3001!')
            console.error('Erro:', error)
        } finally {
            setIsPublishing(false)
        }
    }

    return (
        <div className="w-full h-full overflow-y-auto p-5 space-y-5">
            {/* Header */}
            <div className="flex justify-between items-center sticky top-0 backdrop-blur-sm bg-white/50 p-4 z-10 rounded-xl border border-white/30">
                <h1 className="text-2xl font-bold text-white">Publicar Novo Curso</h1>
                <div className="flex gap-2">
                    <button onClick={() => setShowPreview(true)} className="px-4 py-2 bg-blue-500/50 text-white font-bold rounded-lg hover:bg-blue-500/30 flex items-center gap-2">
                        <img src={OlhoIcon} alt="" />
                        Preview
                    </button>
                    <button onClick={salvarRascunho} className="px-4 py-2 bg-gray-500/50 text-white font-bold rounded-lg hover:bg-gray-500/30 flex items-center gap-2">
                        <img src={SalvarIcon} alt="" />
                        Rascunho
                    </button>
                    <button 
                        onClick={publicarCurso} 
                        disabled={isPublishing}
                        className="px-6 py-2 bg-teal-400 text-white rounded-lg hover:bg-teal-500 font-bold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <img src={FogueteIcon} alt="" />
                        {isPublishing ? 'Publicando...' : 'Publicar'}
                    </button>
                </div>
            </div>

            {/* Título e Imagem */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-5 space-y-3">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <img src={InformacoesIcon} alt="" />
                    Informações Básicas
                </h2>
                <input 
                    type="text"
                    value={curso.titulo}
                    onChange={(e) => setCurso({ ...curso, titulo: e.target.value })}
                    placeholder="Título do Curso"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <div className="flex gap-3 items-center">
                    <label className="px-4 py-2 bg-teal-400/20 text-teal-400 rounded-lg cursor-pointer hover:bg-teal-400/30 flex items-center gap-2">
                        <img src={UploadIcon} alt="" />
                        {previewImagem ? 'Alterar' : 'Upload'} Imagem
                        <input type="file" accept="image/*" onChange={handleImagemUpload} className="hidden"/>
                    </label>
                    {previewImagem && (
                        <div className="relative">
                            <img src={previewImagem} alt="Preview" className="w-24 h-16 object-cover rounded-lg"/>
                            <button onClick={() => { setPreviewImagem(null); setCurso({ ...curso, imagemCapa: null }) }}
                                className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 text-white text-xs">✕</button>
                        </div>
                    )}
                </div>
            </div>

            {/* Módulos */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-5 space-y-3">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                        <img src={ModuloIcon} alt="" />
                        Módulos do Curso
                    </h2>
                    <button onClick={adicionarModulo} className="px-4 py-2 bg-teal-400 text-white rounded-lg hover:bg-teal-500 flex items-center gap-2">
                        <img src={AdicionarIcon} alt="" />
                        Adicionar
                    </button>
                </div>
                {curso.modulos.length === 0 ? (
                    <p className="text-gray-400 text-center py-6">Clique em "Adicionar" para criar módulos</p>
                ) : (
                    curso.modulos.map((mod, idx) => (
                        <div key={mod.id} className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2">
                            <div className="flex justify-between">
                                <h3 className="text-teal-400 font-bold">Módulo {idx + 1}</h3>
                                <button onClick={() => removerModulo(mod.id)} className="text-red-400 hover:text-red-500 flex items-center gap-2">
                                    <img src={LixeiraIcon} alt="" />
                                </button>
                            </div>
                            <input type="text" value={mod.titulo} onChange={(e) => atualizarModulo(mod.id, 'titulo', e.target.value)}
                                placeholder="Título do módulo" className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"/>
                            <textarea value={mod.explicacao} onChange={(e) => atualizarModulo(mod.id, 'explicacao', e.target.value)}
                                placeholder="Explicação" rows="3" className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"/>
                            <div>
                                <div className="flex gap-2 mb-2">
                                    <button onClick={() => atualizarModulo(mod.id, 'videoTipo', 'link')}
                                        className={`px-3 py-1 rounded-lg ${mod.videoTipo === 'link' ? 'bg-teal-400 text-white' : 'bg-white/5 text-gray-400'} flex items-center gap-2`}>
                                        <img src={LinkIcon} alt="" />
                                        Link
                                    </button>
                                    <button onClick={() => atualizarModulo(mod.id, 'videoTipo', 'upload')}
                                        className={`px-3 py-1 rounded-lg ${mod.videoTipo === 'upload' ? 'bg-teal-400 text-white' : 'bg-white/5 text-gray-400'} flex items-center gap-2`}>
                                        <img src={UploadIcon} alt="" />
                                        Upload
                                    </button>
                                </div>
                                <input type={mod.videoTipo === 'link' ? 'url' : 'text'} value={mod.videoConteudo}
                                    onChange={(e) => atualizarModulo(mod.id, 'videoConteudo', e.target.value)}
                                    placeholder={mod.videoTipo === 'link' ? 'URL do vídeo' : 'Nome do arquivo'}
                                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none"/>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Mão na Massa */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-5 space-y-3">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <img src={MusculoIcon} alt="" />
                    Mão na Massa
                </h2>
                <div className="flex gap-2 mb-2">
                    <button onClick={() => setCurso({ ...curso, maoNaMassa: { ...curso.maoNaMassa, tipo: 'arquivo' } })}
                        className={`px-3 py-2 rounded-lg flex items-center gap-2 ${curso.maoNaMassa.tipo === 'arquivo' ? 'bg-teal-400 text-white' : 'bg-white/5 text-gray-400'}`}>
                        <img src={DocumentIcon} alt="" />
                        Arquivo
                    </button>
                    <button onClick={() => setCurso({ ...curso, maoNaMassa: { ...curso.maoNaMassa, tipo: 'link' } })}
                        className={`px-3 py-2 rounded-lg ${curso.maoNaMassa.tipo === 'link' ? 'bg-teal-400 text-white' : 'bg-white/5 text-gray-400'} flex items-center gap-2`}>
                        <img src={LinkIcon} alt="" />
                        Link Externo
                    </button>
                </div>
                <input type="text" value={curso.maoNaMassa.conteudo}
                    onChange={(e) => setCurso({ ...curso, maoNaMassa: { ...curso.maoNaMassa, conteudo: e.target.value } })}
                    placeholder={curso.maoNaMassa.tipo === 'arquivo' ? 'Nome do arquivo' : 'URL do formulário'}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"/>
            </div>

            {/* Quiz */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-5 space-y-3">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                        <img src={QuizzIcon} alt="" />
                        Quiz
                    </h2>
                    <button onClick={adicionarPergunta} className="px-4 py-2 bg-teal-400 text-white rounded-lg hover:bg-teal-500 flex items-center gap-2">
                        <img src={AdicionarIcon} alt="" />
                        Pergunta
                    </button>
                </div>
                {curso.quiz.length === 0 ? (
                    <p className="text-gray-400 text-center py-6">Clique em "Pergunta" para adicionar questões</p>
                ) : (
                    curso.quiz.map((perg, idx) => (
                        <div key={perg.id} className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2">
                            <div className="flex justify-between">
                                <h3 className="text-teal-400 font-bold">Pergunta {idx + 1}</h3>
                                <button onClick={() => removerPergunta(perg.id)} className="text-red-400 hover:text-red-500">
                                    <img src={LixeiraIcon} alt="" />
                                </button>
                            </div>
                            <input type="text" value={perg.pergunta} onChange={(e) => atualizarPergunta(perg.id, e.target.value)}
                                placeholder="Digite a pergunta" className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"/>
                            <div className="space-y-2">
                                {perg.alternativas.map((alt, i) => (
                                    <div key={alt.id} className="flex items-center gap-2">
                                        <input type="radio" name={`perg-${perg.id}`} checked={alt.correta}
                                            onChange={() => marcarCorreta(perg.id, alt.id)} className="w-4 h-4 cursor-pointer"/>
                                        <input type="text" value={alt.texto} onChange={(e) => atualizarAlternativa(perg.id, alt.id, e.target.value)}
                                            placeholder={`Alternativa ${i + 1}`} className="flex-1 px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none"/>
                                        {perg.alternativas.length > 2 && (
                                            <button onClick={() => removerAlternativa(perg.id, alt.id)} className="text-red-400 text-sm">
                                                <img src={LixeiraIcon} alt="" />
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <button onClick={() => adicionarAlternativa(perg.id)} className="flex items-center gap-2 px-3 py-1 bg-white/5 text-gray-300 rounded-lg hover:bg-white/10 text-sm">
                                    <img src={AdicionarIcon} alt="" />
                                    Alternativa
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Preview Modal */}
            {showPreview && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
                    <div className="bg-gray-900 rounded-xl p-6 max-w-3xl w-full max-h-[85vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-white">Preview do Curso</h2>
                            <button onClick={() => setShowPreview(false)} className="text-white text-xl">✕</button>
                        </div>
                        <div className="space-y-3">
                            {previewImagem && <img src={previewImagem} alt="Capa" className="w-full h-40 object-cover rounded-lg"/>}
                            <h1 className="text-2xl font-bold text-white">{curso.titulo || 'Sem título'}</h1>
                            <p className="text-gray-400">{curso.modulos.length} módulos • {curso.quiz.length} questões</p>
                            {curso.modulos.map((mod, i) => (
                                <div key={mod.id} className="bg-white/5 p-3 rounded-lg">
                                    <h3 className="text-teal-400 font-bold">Módulo {i + 1}: {mod.titulo}</h3>
                                    <p className="text-gray-300 text-sm mt-1">{mod.explicacao}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}