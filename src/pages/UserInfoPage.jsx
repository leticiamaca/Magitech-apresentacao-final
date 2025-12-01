import {useState} from "react"
import UserIcon from "../assets/userIcon.svg"
import Suporte from "../components/adm/admComponents/Suporte"
import DashboardAluno from "../components/user/DashboardAluno"

import Configuracoes from "../components/user/Configuracoes"

// Ícones customizados em SVG


const InfoIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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

const BookIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
)

const SettingsIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
)
const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" role="img" color="white">
  <path d="M15 6 L9 12 L15 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
)

export default function UserInfoPage(){
    const [activePage, setActivePage] = useState("Dashboard")
    const [showLogoutModal, setShowLogoutModal] = useState(false)
    
    const menuItems = [
   
        {id: "Dashboard", label: "Dashboard", icon: <InfoIcon />},
        { id: "Suporte", label: "Suporte", icon: <SupportIcon /> },
        {id: "Configurações", label: "Configurações", icon: <SettingsIcon />}
    ]
    
    const renderContent = () =>{
        switch(activePage){
          case "Cursos":
         return <CursosInfo/>
         case "Configurações":
         return <Configuracoes/>
            case "Dashboard":
         return <DashboardAluno/>
            case "Suporte":
         return <Suporte/>
        }
    }

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#4DE0C6] via-[#000] to-[#29141F] p-4 md:p-8">
            
            <div className="max-w-7xl mx-auto min-h-[calc(100vh-4rem)] flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="h-[50px] w-[50px] bg-teal-400 rounded-full flex items-center justify-center"><a href="/user"><ArrowIcon/></a></div>
                {/* Sidebar Moderna */}
                <aside className="w-full md:w-72 flex-shrink-0 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 flex flex-col shadow-2xl">
                    {/* Header do Admin */}
                    <div className="text-center mb-8 pb-6 border-b border-white/20">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 p-1 shadow-lg shadow-teal-500/20">
                            <div className="w-full h-full rounded-full backdrop-blur-md bg-white/10 flex items-center justify-center">
                               <img className="w-12 h-12" src={UserIcon} alt="" />
                            </div>
                        </div>
                        
                        <h2 className="text-white font-bold text-lg">Olá, {localStorage.getItem("username")}</h2>
                        <p className="text-teal-400 text-sm mt-1">Gerencie as suas informações</p>
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
                            <p className="text-white/50 text-xs mt-1">Panel v1.0</p>
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
                                            <p className="text-white/60 text-xs">Cursos em andamento</p>
                                            <p className="text-white font-bold text-xl">-</p>
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
                                            <p className="text-white/60 text-xs">Cursos concluídos</p>
                                            <p className="text-white font-bold text-xl">-</p>
                                        </div>
                                    </div>
                                </div>

                            
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