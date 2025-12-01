import { useNavigate } from "react-router-dom";
import img1 from "../../assets/estudante.png";


export default function SectionHeroConteudo() {
  const navigate = useNavigate();
  return (
    <section className="w-full min-h-screen overflow-hidden bg-gradient-to-bl from-[#29141F] via-[#000] to-[#000] flex items-center justify-center py-12 md:py-16">
      
      {/* Grid responsivo: 1 coluna mobile, 2 colunas desktop */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Imagem - Oculta em mobile, visível em desktop */}
        <div className="md:h-[600px] lg:flex justify-center items-center">
          <img 
            src={img1} 
            alt="Estudante acelerando conhecimento" 
            className="w-full max-w-lg xl:max-w-xl h-auto object-contain" 
          />
        </div>

        {/* Conteúdo de texto - Mobile-first */}
        <div className="flex flex-col text-center lg:text-left items-center lg:items-start space-y-6 md:space-y-8">
          {/* Título responsivo: menor em mobile, maior em desktop */}
          <h2 className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase leading-tight max-w-2xl">
            Acelere seu <span className="font-bold">conhecimento</span> com a nossa plataforma
          </h2>
          
          {/* Botão responsivo: largura total em mobile, auto em desktop */}
          <button
            onClick={() => navigate('/auth', { state: { screen: 'signup' } })}
            className="w-full sm:w-auto px-8 sm:px-12 md:px-16 py-3 rounded-md border border-white text-white text-sm md:text-base tracking-widest hover:bg-white/10 transition-colors duration-200"
          >
            COMEÇAR
          </button>
        </div>
      </div>
    </section>
  );
}
