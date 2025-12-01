import { useState } from 'react';

export default function Suporte() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.email || !formData.mensagem) {
      setStatusMessage({ 
        type: 'error', 
        text: '⚠️ Por favor, preencha todos os campos!' 
      });
      return;
    }

    setIsLoading(true);
    setStatusMessage({ type: '', text: '' });

    try {
      const response = await fetch('http://localhost:3001/api/enviar-suporte', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage({ 
          type: 'success', 
          text: 'Mensagem enviada com sucesso! Responderemos em breve.' 
        });
        
        // Limpar formulário
        setFormData({
          nome: '',
          email: '',
          mensagem: ''
        });
      } else {
        setStatusMessage({ 
          type: 'error', 
          text: data.message 
        });
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setStatusMessage({ 
        type: 'error', 
        text: 'Erro ao enviar mensagem. Verifique se o servidor está rodando!' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 text-white m-auto max-w-3xl">
      <h1 className="text-2xl font-semibold mb-4">Central de Suporte</h1>

      <p className="text-zinc-300 mb-6">
        Está com dúvidas sobre o uso do painel? Envie uma mensagem para nossa equipe.
      </p>

      {/* Mensagem de Status */}
      {statusMessage.text && (
        <div className={`mb-4 p-4 rounded-lg ${
          statusMessage.type === 'success' 
            ? 'bg-emerald-900/50 border border-emerald-500 text-emerald-200' 
            : 'bg-red-900/50 border border-red-500 text-red-200'
        }`}>
          {statusMessage.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-zinc-800 p-6 rounded-2xl shadow max-w-full space-y-4">
        <div>
          <label className="block mb-1 text-zinc-400">Nome *</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-zinc-700 text-white outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Digite seu nome"
            disabled={isLoading}
          />
        </div>

        <div>
          <label className="block mb-1 text-zinc-400">E-mail *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-zinc-700 text-white outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="seu@email.com"
            disabled={isLoading}
          />
        </div>

        <div>
          <label className="block mb-1 text-zinc-400">Mensagem *</label>
          <textarea
            name="mensagem"
            rows="6"
            value={formData.mensagem}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-zinc-700 text-white outline-none resize-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Descreva sua dúvida ou problema..."
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-emerald-600 hover:bg-emerald-700 px-6 py-2 rounded-2xl text-white font-medium transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isLoading ? (
            <>
              
              Enviando...
            </>
          ) : (
            <>
              Enviar Mensagem
            </>
          )}
        </button>
      </form>

      <p className="text-zinc-400 text-sm mt-6">
        Ou envie um e-mail diretamente para{' '}
        <a href="mailto:suportemagitech@gmail.com" className="text-emerald-400 hover:underline">
          suportemagitech@gmail.com
        </a>
      </p>
    </div>
  );
}