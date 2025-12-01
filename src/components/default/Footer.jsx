import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-gradient-to-br from-[#000] to-[#081713] text-white border-t border-white/10">
      {/* Container do footer - mobile-first com padding responsivo */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold tracking-wide">Magitech</h3>
          <p className="text-white/70 text-sm">
            Aprendizado ágil e moderno com foco em resultado.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm uppercase tracking-wider text-white/80 font-bold">Navegação</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><a href="#quem-somos" className="hover:text-white">Quem somos</a></li>
            <li><a href="#cursos" className="hover:text-white">Cursos</a></li>
            <li><a href="#plataforma" className="hover:text-white">Plataforma</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm uppercase tracking-wider text-white/80 font-bold">Conta</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><Link to="/auth" className="hover:text-white">Entrar</Link></li>
            <li><Link to="/auth" className="hover:text-white">Criar conta</Link></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm uppercase tracking-wider text-white/80 font-bold">Contato</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><a href="mailto:suportemagitech@gmail.com" className="hover:text-white">suportemagitech@gmail.com</a></li>
          </ul>
        </div>
      </div>
      {/* Seção de copyright - responsiva */}
      <div className="border-t border-white/10">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-white/60">
          <p className="text-center md:text-left">© {new Date().getFullYear()} Magitech. Todos os direitos reservados.</p>
          {/* <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
