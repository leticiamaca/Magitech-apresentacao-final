export default function ErrorPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-600/20 via-blue-600/20 to-purple-700/20 backdrop-blur-lg text-center p-6">

      {/* Ícone grande estilo Google */}
      <div className="text-6xl md:text-7xl font-bold text-white drop-shadow-lg">
        404
      </div>

      {/* Mensagem */}
      <h1 className="mt-4 text-2xl md:text-3xl font-semibold text-white">
        Página não encontrada
      </h1>

      <p className="text-gray-200 mt-2 max-w-lg">
        Parece que você tentou acessar uma página que não existe ou foi movida.
      </p>

      {/* BOTÃO */}
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-6 px-6 py-3 rounded-xl font-semibold text-white 
                   bg-gradient-to-r from-emerald-500 to-blue-600 
                   hover:opacity-90 transition-all shadow-lg"
      >
        Voltar ao início
      </button>

      {/* Assinatura da marca */}
      <div className="mt-10 text-sm text-emerald-300 opacity-70">
        MagiTech Studios
      </div>
    </div>
  );
}