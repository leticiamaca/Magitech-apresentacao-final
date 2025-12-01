import logo from "../../assets/LogoBranco.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import LogoutIcon from "../../assets/userIcon.svg"

export default function UserNavbar() {
    const [showLogoutModal, setShowLogoutModal] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAnchorClick = (e, id) => {
        e.preventDefault();
        setIsMenuOpen(false);

        // Se não estiver na página /user, navega para lá primeiro
        if (location.pathname !== "/user") {
            navigate("/user");
            // Aguarda um momento para a página carregar e depois faz o scroll
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            // Se já estiver na página /user, apenas faz o scroll
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <nav className="w-full backdrop-blur-md bg-white/10 border border-white/20  text-white py-4 px-4 md:px-8 relative z-[50]">
            <div className="max-w-7xl mx-auto flex items-center justify-between z-50">
                {/* Left side - Navigation */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    <a href="/user#curso" onClick={(e) => handleAnchorClick(e, 'curso')} className="text-sm font-medium opacity-80 hover:opacity-100 transition">
                        MEUS CURSOS
                    </a>
                    <a href="/user/info" className="text-sm font-medium opacity-80 hover:opacity-100 transition">
                        MINHA CONTA
                    </a>

                </div>

                {/* Mobile menu button */}
                <div className="md:hidden z-50">
                    <button
                        className="text-white p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Center - Logo and Brand */}
                <div className="flex items-center gap-2 md:gap-3">
                    <img src={logo} alt="Magitech" className="w-6 h-6 md:w-8 md:h-8" />
                    <span className="text-sm md:text-lg font-semibold tracking-wider">
                        MAGITECH | <span className="text-teal-400">LEARNING</span>
                    </span>
                </div>

                {/* Right side - User info */}
                <div className="flex items-center gap-2 md:gap-4">
                    <p className="hidden sm:block text-sm opacity-80">OLÁ, <span className="font-semibold text-teal-400">BERNARDO!</span></p>
                    <p className="opacity-40 hidden sm:block">|</p>
                    <button
                        onClick={() => setShowLogoutModal(true)}
                        className=" flex items-center rounded-xl text-white/70 hover:bg-red-500/20 hover:text-red-400 font-medium transition-all duration-200"
                    >
                        SAIR
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-md bg-black/90 border-t border-white/10 z-50">
                    <div className="px-4 py-6 space-y-4">
                        <div className="pt-4 border-b border-white/20">
                            <p className="text-sm opacity-80">OLÁ, <span className="font-semibold text-teal-400">BERNARDO!</span></p>
                        </div>
                        <Link
                            to="/"
                            className="block text-sm font-medium opacity-80 hover:opacity-100 transition py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            INÍCIO
                        </Link>
                        <a
                            href="/user#curso"
                            onClick={(e) => handleAnchorClick(e, 'curso')}
                            className="block text-sm font-medium opacity-80 hover:opacity-100 transition py-2"
                        >
                            MEUS CURSOS
                        </a>
                        <button
                            onClick={() => setShowLogoutModal(true)}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-red-500/20 hover:text-red-400 font-medium transition-all duration-200"
                        >
                            SAIR
                        </button>
                    </div>
                </div>
            )}
            {showLogoutModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-md">
                    <div className="bg-black/60 h-[100vh] w-[100vw]">

                  
                    <div className="absolute top-[50vh] bg-black/20 backdrop-blur-md left-[50vw] -translate-x-1/2 -translate-y-1/2 border border-white/20 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-fade-in">
                        {/* Ícone de Aviso */}
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-400/30 flex items-center justify-center">
                            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>

                        {/* Título e Mensagem */}
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-white mb-2">Tem certeza?</h2>
                            <p className="text-white/70 text-sm">Você realmente deseja sair do painel de administração?</p>
                        </div>

                        {/* Botões de Ação */}
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowLogoutModal(false)}
                                className="flex-1 px-6 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white font-medium hover:bg-white/20 transition-all duration-200 z-50"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={() => {
                                    setShowLogoutModal(false)
                                    // Aqui você pode adicionar a lógica de logout
                                    window.location.href = '/' // Redireciona para a página inicial
                                }}
                                className="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 rounded-xl text-white font-bold shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transform hover:scale-105 transition-all duration-200 z-2"
                            >
                                Sim, Sair
                            </button>
                        </div>
                    </div>
                </div>
                  </div>
            )}
        </nav>
    );
}
