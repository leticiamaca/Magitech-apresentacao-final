import foto from "../../assets/celular.png";


export default function SectionQuemSomos() {
    return (
        <section id="quem-somos" className="w-full min-h-screen bg-gradient-to-br from-[#000] to-[#4DE0C630] flex items-center py-12 md:py-16">
            {/* Container responsivo com padding mobile-first */}
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                
                {/* Conteúdo de texto - ordem 1 em mobile, ordem 1 em desktop */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 md:gap-6 text-white order-1">
                    {/* Título responsivo */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide">MAGITECH</h2>
                    
                    {/* Parágrafo com espaçamento responsivo */}
                    <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                        Na Magitech, unimos gamificação e tecnologia para transformar o aprendizado em uma experiência envolvente e contínua. Em parceria com a Darede, desenvolvemos uma plataforma de estudos modular e eficiente, pensada para reduzir custos de manutenção sem abrir mão da performance e da evolução constante. Nosso foco é simples: entregar valor, engajamento e resultados reais.
                    </p>
                </div>
        
                {/* Imagem responsiva - ordem 2 em mobile e desktop */}
                <div className="flex justify-center lg:justify-end order-2">
                    <img 
                        src={foto} 
                        alt="Quem somos - Magitech" 
                        className="w-screen sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg" 
                    />
                </div>
            </div>
        </section>
    );
}
