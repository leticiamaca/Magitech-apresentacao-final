import { BarChart3, Users, BookOpen, Star, MessageCircle } from "lucide-react";
export default function Dashboard() {
  return (
    <div className="p-6 text-white flex item-center flex-col h-[60vh] justify-center">
      <h1 className="text-2xl font-semibold mb-6">Bem-vindo(a) ao Painel Administrativo da MagiTech</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 p-4 rounded-2xl shadow">
          <BookOpen className="mb-2" />
          <p className="text-lg font-medium">Cursos publicados</p>
          <p className="text-2xl font-bold">8</p>
        </div>

        <div className="bg-gradient-to-br from-sky-700 to-sky-900 p-4 rounded-2xl shadow">
          <Users className="mb-2" />
          <p className="text-lg font-medium">Alunos cadastrados</p>
          <p className="text-2xl font-bold">120</p>
        </div>

        <div className="bg-gradient-to-br from-yellow-700 to-yellow-900 p-4 rounded-2xl shadow">
          <Star className="mb-2" />
          <p className="text-lg font-medium">Avaliações recebidas</p>
          <p className="text-2xl font-bold">35</p>
        </div>
      </div>

      <div className="bg-gray-700 p-4 rounded-2xl shadow flex items-center justify-center gap-2">

        <MessageCircle className="mb-2" />
        <p className="text-lg font-medium">Atente-se ao seu desempenho pelo feedback recebido nos cursos!</p>


      </div>


    </div>



  );
}