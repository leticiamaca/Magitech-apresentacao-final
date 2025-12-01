import react from "react";
import { CheckCircle, AlertTriangle, MessageSquare } from "lucide-react";
export default function Notificacoes(){
    return <>
   
    <div className="p-6 text-white w-full flex items-center flex-col min-h-[60vh] justify-center">
      <h1 className="text-2xl font-semibold mb-4">Notificações</h1>

      <div className="space-y-4">
        <div className="flex items-center gap-3 bg-zinc-800 p-4 rounded-2xl">
          <CheckCircle className="text-emerald-400" />
          <p>Curso <strong>“JavaScript Avançado”</strong> publicado com sucesso.</p>
        </div>

        <div className="flex items-center gap-3 bg-zinc-800 p-4 rounded-2xl">
          <AlertTriangle className="text-yellow-400" />
          <p>Curso <strong>“Lógica de Programação”</strong> está com vídeos pendentes.</p>
        </div>

        <div className="flex items-center gap-3 bg-zinc-800 p-4 rounded-2xl">
          <MessageSquare className="text-sky-400" />
          <p>Novo comentário no curso <strong>“HTML para Iniciantes”</strong>.</p>
        </div>
      </div>

      <button className="mt-6 bg-emerald-600 hover:bg-emerald-700 px-6 py-2 rounded-2xl text-white font-medium transition">
        Marcar todas como lidas
      </button>
    </div>
    </>
}
