import react from "react"

export default function Configuracoes(){
    return (
    <div className="w-full h-full overflow-y-auto p-6 space-y-6">

      {/* TÍTULO */}
      <h1 className="text-2xl font-semibold text-white">Configurações do Usuário</h1>

      {/* CARD – Informações pessoais */}
      <div className="bg-zinc-900/70 p-6 rounded-2xl shadow-lg space-y-4">
        <h2 className="text-xl font-semibold text-white">Informações pessoais</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-300">Nome completo</label>
            <input 
              type="text" 
              className="w-full p-2 rounded-lg bg-zinc-800 text-white border border-zinc-700"
              defaultValue="Letícia Castro"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">E-mail</label>
            <input 
              type="email" 
              className="w-full p-2 rounded-lg bg-zinc-800 text-white border border-zinc-700"
              defaultValue="usuario@email.com"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Telefone</label>
            <input 
              type="text" 
              className="w-full p-2 rounded-lg bg-zinc-800 text-white border border-zinc-700"
              defaultValue="(11) 90000-0000"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Data de nascimento</label>
            <input 
              type="date" 
              className="w-full p-2 rounded-lg bg-zinc-800 text-white border border-zinc-700"
            />
          </div>
        </div>

        <button className="mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-white font-semibold">
          Salvar alterações
        </button>
      </div>

      {/* CARD – Segurança */}
      <div className="bg-zinc-900/70 p-6 rounded-2xl shadow-lg space-y-4">
        <h2 className="text-xl font-semibold text-white">Segurança</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-300">Senha atual</label>
            <input type="password" className="w-full p-2 rounded-lg bg-zinc-800 text-white border border-zinc-700" />
          </div>

          <div>
            <label className="text-sm text-gray-300">Nova senha</label>
            <input type="password" className="w-full p-2 rounded-lg bg-zinc-800 text-white border border-zinc-700" />
          </div>
        </div>

        <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-semibold">
          Atualizar senha
        </button>
      </div>

      {/* CARD – Preferências */}
      <div className="bg-zinc-900/70 p-6 rounded-2xl shadow-lg space-y-4">
        <h2 className="text-xl font-semibold text-white">Preferências</h2>

        <div className="flex items-center justify-between">
          <span className="text-gray-300">Receber notificações por e-mail</span>
          <input type="checkbox" className="w-5 h-5" />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-300">Receber avisos de novos cursos</span>
          <input type="checkbox" className="w-5 h-5" />
        </div>
      </div>

      {/* CARD – Tema */}
      <div className="bg-zinc-900/70 p-6 rounded-2xl shadow-lg space-y-4">
        <h2 className="text-xl font-semibold text-white">Tema</h2>

        <p className="text-gray-300">Escolha o modo de exibição</p>

        <div className="flex gap-4">
          <button className="px-4 py-2 bg-white text-black rounded-xl">
            Claro
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-xl">
            Escuro
          </button>
        </div>
      </div>

      {/* CARD – Privacidade */}
      <div className="bg-zinc-900/70 p-6 rounded-2xl shadow-lg space-y-4">
        <h2 className="text-xl font-semibold text-white">Privacidade</h2>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Mostrar meu perfil para outros usuários</span>
          <input type="checkbox" className="w-5 h-5" />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-300">Permitir recomendações personalizadas</span>
          <input type="checkbox" className="w-5 h-5" />
        </div>
      </div>

      {/* CARD – Zona de perigo */}
      <div className="bg-red-900/40 border border-red-700 p-6 rounded-2xl shadow-lg space-y-3">
        <h2 className="text-xl font-semibold text-red-300">Zona de perigo</h2>

        <p className="text-gray-300">
          Excluir sua conta removerá permanentemente seus dados, progresso e certificados.
        </p>

        <button className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-xl font-semibold">
          Excluir conta permanentemente
        </button>
      </div>

    </div>
    )
}
