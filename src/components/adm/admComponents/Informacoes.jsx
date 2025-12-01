import react from 'react'

export default function Informacoes(){
   return <>
 <div className="p-6 text-white flex item-center flex-col h-[60vh] justify-center">
      <h1 className="text-2xl font-semibold mb-4">Informações do Sistema</h1>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2 text-emerald-400">Sobre a MagiTech</h2>
        <p className="text-zinc-300">
          O painel administrativo da MagiTech foi criado para simplificar o gerenciamento de cursos online,
          alunos e conteúdo, proporcionando uma experiência intuitiva e moderna.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2 text-emerald-400">Versão do Sistema</h2>
        <p className="text-zinc-300">Versão atual: <span className="font-semibold text-white">1.0.2</span></p>
      </section>

      <section>
        <h2 className="text-xl font-medium mb-2 text-emerald-400">Equipe Responsável</h2>
        <ul className="list-disc ml-6 text-zinc-300">
          <li>Letícia de Castro — Desenvolvedora Front-End</li>
          <li>João Silva — Designer UX</li>
          <li>Ana Ramos — Gerente de Projeto</li>
        </ul>
      </section>
    </div>
    </>
}