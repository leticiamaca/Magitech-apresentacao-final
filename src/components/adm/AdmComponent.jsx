import { useState } from 'react'
import UserIcon from "../../assets/userIcon.svg"
import Informacoes from "../adm/admComponents/Informacoes"
import Dashboard from "../adm/admComponents/DashBoard"
import Suporte from "../adm/admComponents/Suporte"
// import Notificacoes from "../adm/admComponents/Notificacoes"
import PublicarCurso from "../adm/admComponents/PublicarCurso"

// Ícones customizados em SVG
const HomeIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
)

const InfoIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
)

const BellIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
)

const SupportIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
)

const LogoutIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
)

export default function AdmComponent(){
    const [activePage, setActivePage] = useState("Dashboard")
    const [showLogoutModal, setShowLogoutModal] = useState(false)
    
    const menuItems = [
        { id: "Dashboard", label: "Dashboard", icon: <HomeIcon /> },
        { id: "Informacoes", label: "Informações", icon: <InfoIcon /> },
        // { id: "Notificacoes", label: "Notificações", icon: <BellIcon /> },
        { id: "Suporte", label: "Suporte", icon: <SupportIcon /> }
    ]
    
    const renderContent = () =>{
        switch(activePage){
            case "Dashboard":
                return <Dashboard/>;
            case "Informacoes":
                return <Informacoes/>;
            case "Suporte":
                return <Suporte/>
            // case "Notificacoes":
            //     return <Notificacoes/>
            case "PublicarCurso":
                return <PublicarCurso/>
            default:
                return <Dashboard/>;
        }
    }

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#4DE0C6] via-[#000] to-[#29141F] p-4 md:p-8">
            <div className="max-w-7xl mx-auto min-h-[calc(100vh-4rem)] flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Sidebar Moderna */}
                <aside className="w-full md:w-72 flex-shrink-0 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 flex flex-col shadow-2xl">
                    {/* Header do Admin */}
                    <div className="text-center mb-8 pb-6 border-b border-white/20">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 p-1 shadow-lg shadow-teal-500/20">
                            <div className="w-full h-full rounded-full backdrop-blur-md bg-white/10 flex items-center justify-center">
                                <img className="w-12 h-12" src={UserIcon} alt="Admin" />
                            </div>
                        </div>
                        <h2 className="text-white font-bold text-lg">Olá, ADM</h2>
                        <p className="text-teal-400 text-sm mt-1">Painel de Controle</p>
                    </div>

                    {/* Menu de Navegação */}
                    <nav className="flex-1 space-y-2">
                        {menuItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => setActivePage(item.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                                    activePage === item.id
                                        ? 'bg-teal-400/20 text-teal-400 shadow-lg shadow-teal-500/10 border border-teal-400/30'
                                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                                }`}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </nav>

                    {/* Footer da Sidebar */}
                    <div className="pt-6 border-t border-white/20 space-y-3">
                        <button 
                            onClick={() => setShowLogoutModal(true)}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-red-500/20 hover:text-red-400 font-medium transition-all duration-200"
                        >
                            <LogoutIcon />
                            <span>Sair</span>
                        </button>
                        <div className="text-center">
                            <p className="text-teal-400 font-bold text-sm">MagitechStudios</p>
                            <p className="text-white/50 text-xs mt-1">Admin Panel v1.0</p>
                        </div>
                    </div>
                </aside>

                {/* Conteúdo Principal */}
                <main className="flex-1 overflow-hidden">
                    {activePage === "PublicarCurso" ? (
                        <div className="h-full min-h-[60vh] backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
                            {renderContent()}
                        </div>
                    ) : (
                        <div className="h-full flex flex-col gap-6">
                            {/* Action Bar */}
                            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <h1 className="text-2xl font-bold text-white mb-1">Publicar Novo Curso</h1>
                                        <p className="text-white/60 text-sm">Crie e publique conteúdo educacional para sua plataforma</p>
                                    </div>
                                    <button 
                                        onClick={() => setActivePage("PublicarCurso")} 
                                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl text-white font-bold shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transform hover:scale-105 transition-all duration-200"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                        Criar Curso
                                    </button>
                                </div>
                            </div>

                            {/* Dashboard Content */}
                            <div className="flex-1 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl overflow-y-auto">
                                {renderContent()}
                            </div>

                            {/* Quick Stats Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                                <div className="backdrop-blur-md bg-gradient-to-br from-teal-500/20 to-blue-500/20 border border-teal-400/30 rounded-xl p-4 shadow-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-teal-400/20 flex items-center justify-center">
                                            <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-xs">Total Cursos</p>
                                            <p className="text-white font-bold text-xl">24</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="backdrop-blur-md bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-xl p-4 shadow-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-purple-400/20 flex items-center justify-center">
                                            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-xs">Alunos Ativos</p>
                                            <p className="text-white font-bold text-xl">1.2K</p>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="backdrop-blur-md bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-xl p-4 shadow-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-orange-400/20 flex items-center justify-center">
                                            <BellIcon />
                                        </div>
                                        <div>
                                            <p className="text-white/60 text-xs">Notificações</p>
                                            <p className="text-white font-bold text-xl">8</p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    )}
                </main>
            </div>

            {/* Modal de Confirmação de Logout */}
            {showLogoutModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 max-w-md w-full shadow-2xl transform animate-fade-in">
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
                                className="flex-1 px-6 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white font-medium hover:bg-white/20 transition-all duration-200"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={() => {
                                    setShowLogoutModal(false)
                                    // Aqui você pode adicionar a lógica de logout
                                    window.location.href = '/' // Redireciona para a página inicial
                                }}
                                className="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 rounded-xl text-white font-bold shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transform hover:scale-105 transition-all duration-200"
                            >
                                Sim, Sair
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}