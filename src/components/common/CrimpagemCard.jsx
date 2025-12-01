import { Link, useLocation } from "react-router-dom";
import img from "../../assets/FotoCrimpagemDeCabos.jpg";

export default function CourseCard({
  id = "1",
  title = "Curso Crimpagem de Cabos",
  description = "O curso de crimpagem de cabos visa ensinar os principais conceitos e técnicas de crimpagem de cabos, com foco em segurança e qualidade.",
  buttonText = "ACESSAR",
  requiresAuth = true, // Mudei para true por padrão
}) {
  const location = useLocation();

  // Verifica se está na área de usuário (logado)
  const isUserArea = location.pathname.startsWith("/user");

  // Define o destino do link
  const linkDestination = isUserArea
    ? `/module/${id}/lesson/1` // Vai direto pro módulo se estiver na área de usuário
    : `/auth?redirect=/module/${id}/lesson/1`; // Vai pro login se estiver na página principal

  return (
    <div className="w-full max-w-[350px] mx-auto h-[500px] rounded-xl border border-white/20 bg-white/5 text-white overflow-hidden">
      <div className="h-64 w-full overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col gap-2 h-[calc(500px-256px)]">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-white/80 leading-relaxed flex-1">
          {description}
        </p>
        <Link
          to={linkDestination}
          className="mt-2 px-4 py-2 rounded-md border border-white text-white text-sm hover:bg-white/10 transition self-start"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
