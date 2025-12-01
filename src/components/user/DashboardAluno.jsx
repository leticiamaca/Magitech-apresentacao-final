import react from "react";

export default function DashboardAluno() {
  return (
    <section className="flex flex-col gap-6 p-6">
      <h1 className="text-2xl font-bold text-white">Painel do Usuário</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-emerald-600/40 rounded-2xl p-4">
          <h3 className="text-white font-semibold">Cursos em andamento</h3>
          <p className="text-3xl font-bold text-emerald-300 mt-2">1</p>
        </div>
        <div className="bg-blue-600/40 rounded-2xl p-4">
          <h3 className="text-white font-semibold">Cursos concluídos</h3>
          <p className="text-3xl font-bold text-blue-300 mt-2">-</p>
        </div>
        <div className="bg-yellow-600/40 rounded-2xl p-4">
          <h3 className="text-white font-semibold">Certificados emitidos</h3>
          <p className="text-3xl font-bold text-yellow-300 mt-2">-</p>
        </div>
      </div>

      <div className="bg-zinc-900/70 rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">
          Últimos cursos acessados
        </h2>
        <ul className="space-y-3">
          <li className="flex justify-between items-center">
            <span className="text-white">Curso Crimpagem de Cabos</span>
            <button className="text-emerald-400 hover:underline">
              <a href="/module/:courseId/lesson/:lessonId">Continuar</a>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}
