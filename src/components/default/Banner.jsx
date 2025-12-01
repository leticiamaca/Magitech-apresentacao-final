import foto from "../../assets/fotoPadraoMeninaVR.png"
import logo from "../../assets/LogoBranco.svg"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Banner() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleAnchorClick = (e, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMenuOpen(false);
    };
    return (
        <section className="w-full h-screen overflow-hidden bg-gradient-to-br from-[#4DE0C680] via-[#000] to-[#29141F]">
            {/* Glass navbar - responsivo */}
            <div className="w-full backdrop-blur-md bg-white/10 border border-white/20 flex justify-center items-center">
                <nav className="w-full max-w-6xl h-14 flex items-center px-4 sm:px-6 md:px-8 justify-between text-white relative font-bold">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="Logo" className="w-8 h-8 md:w-12 md:h-12" />
                        <Link to="/auth" className="text-xs font-semibold tracking-wider opacity-90 hover:opacity-100 hidden sm:block">LOGIN</Link>
                    </div>
                    
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
                        <li className="opacity-80 hover:opacity-100"><a href="#quem-somos" onClick={(e) => handleAnchorClick(e, 'quem-somos')}>QUEM SOMOS</a></li>
                        <li className="opacity-80 hover:opacity-100"><a href="#cursos" onClick={(e) => handleAnchorClick(e, 'cursos')}>CURSOS</a></li>
                        <li className="opacity-80 hover:opacity-100"><a href="#plataforma" onClick={(e) => handleAnchorClick(e, 'plataforma')}>SOBRE A PLATAFORMA</a></li>
                    </ul>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden flex flex-col gap-1 p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className={`w-5 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`w-5 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-5 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </button>
                    
                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 md:hidden">
                            <ul className="flex flex-col gap-4 text-sm">
                                <li><Link to="/auth" className="block opacity-80 hover:opacity-100">LOGIN</Link></li>
                                <li><a href="#quem-somos" onClick={(e) => handleAnchorClick(e, 'quem-somos')} className="block opacity-80 hover:opacity-100">QUEM SOMOS</a></li>
                                <li><a href="#cursos" onClick={(e) => handleAnchorClick(e, 'cursos')} className="block opacity-80 hover:opacity-100">CURSOS</a></li>
                                <li><a href="#plataforma" onClick={(e) => handleAnchorClick(e, 'plataforma')} className="block opacity-80 hover:opacity-100">SOBRE A PLATAFORMA</a></li>
                            </ul>
                        </div>
                    )}
                </nav>
            </div>



            {/* Hero section - mobile-first */}
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 md:py-12 lg:py-16">
                <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12">
                    {/* Texto e botões - Mobile-first, centralizado em mobile, esquerda em desktop */}
                    <div className="z-10 flex flex-col text-center md:text-left justify-center items-center md:items-start w-full md:w-1/2 space-y-6 md:space-y-8">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold uppercase leading-tight">
                            Estude mais em <span className="font-bold text-teal-400">menos tempo!</span>
                        </h1>
                        {/* Botões responsivos - largura total em mobile, lado a lado em tablet+ */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center md:justify-start items-stretch sm:items-center w-full sm:w-auto">
                            <button
                                onClick={() => navigate('/auth', { state: { screen: 'signup' } })}
                                className="px-6 md:px-8 lg:px-10 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white text-sm md:text-base lg:text-lg tracking-widest hover:bg-white/20 transition-all duration-200 font-bold"
                            >
                                ENTRAR
                            </button>
                            <button
                                onClick={() => navigate('/auth')}
                                className="px-6 md:px-8 lg:px-10 py-3 backdrop-blur-md bg-white/90 border border-white/20 rounded-xl text-black hover:text-white text-sm md:text-base lg:text-lg tracking-widest hover:bg-white/10 transition-all duration-200 font-bold"
                            >
                                COMEÇAR
                            </button>
                        </div> 
                    </div>
                    
                    {/* Imagem - Mobile-first, topo em mobile, direita em desktop */}
                    <div className="flex justify-center w-full md:w-1/2">
                        <img
                            src={foto}
                            alt="Estudante usando óculos VR"
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

