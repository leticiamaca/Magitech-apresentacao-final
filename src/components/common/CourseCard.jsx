import { useState } from "react";
import LixeiraIcon from "../../assets/Lixeira.svg";

export default function CourseCard({ curso, onDelete, isAdmin = false }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Se não houver curso (card exemplo vazio), retorne o card original
  if (!curso) {
    return (
      // Seu card exemplo original aqui
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl...">
        {/* Conteúdo do card exemplo */}
      </div>
    );
  }

  const descricaoCurso =
    curso.descricao ||
    curso.modulos?.[0]?.explicacao ||
    "Este curso ainda não possui descrição.";

  // Card dinâmico com dados do curso, estilizado igual ao CrimpagemCard
  return (
    <div className="w-full max-w-[350px] mx-auto h-[500px] rounded-xl border border-white/20 bg-white/5 text-white overflow-hidden flex flex-col">
      <div className="h-64 w-full overflow-hidden">
        {curso.imagemCapa ? (
          <img
            src={curso.imagemCapa}
            alt={curso.titulo}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white/40 text-xs">
            Sem imagem
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-semibold line-clamp-2">{curso.titulo}</h3>

        <p className="text-sm text-white/80 leading-relaxed flex-1 line-clamp-4">
          {descricaoCurso}
        </p>

        {isExpanded && (
          <div className="mt-2 space-y-2 text-xs text-white/70 max-h-32 overflow-y-auto">
            <p className="font-semibold">
              Módulos ({curso.modulos?.length || 0})
            </p>
            {curso.modulos?.map((mod, i) => (
              <div key={i} className="bg-white/5 p-2 rounded">
                <p className="text-teal-400 font-semibold">
                  Módulo {i + 1}: {mod.titulo}
                </p>
                <p className="text-gray-300 text-xs line-clamp-2">
                  {mod.explicacao}
                </p>
              </div>
            ))}
            <p className="mt-1">Quiz: {curso.quiz?.length || 0} questões</p>
          </div>
        )}

        <div className="mt-2 flex items-center justify-between gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-4 py-2 rounded-md border border-white text-white text-sm hover:bg-white/10 transition self-start"
          >
            {isExpanded ? "VER MENOS" : "ACESSAR"}
          </button>

          {isAdmin && (
            <button
              onClick={() => onDelete(curso.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              <img src={LixeiraIcon} alt="Excluir curso" className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
