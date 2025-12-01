import logo from "../../assets/LogoBranco.svg";
import fotoGamificacao from "../../assets/gamificacao-magitech.png";

export default function SectionPlataforma() {
  return (
    <section
      id="plataforma"
      className="flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-[#081713] to-[#000] py-12 md:py-16 text-white"
    >
      {/* Container responsivo com padding mobile-first */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
        <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
          {/* Cabeçalho com logo - responsivo */}
          <div className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start flex-wrap">
            <img
              src={logo}
              alt="Magitech"
              className="w-8 h-8 sm:w-10 sm:h-10 opacity-90"
            />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide">
              SOBRE A PLATAFORMA
            </h2>
          </div>

          {/* Descrição - texto responsivo */}
          <p className="text-white/80 leading-relaxed text-sm sm:text-base">
            Uma experiência de aprendizado moderna, com trilhas guiadas,
            métricas de progresso e conteúdo imersivo. A plataforma foi pensada
            para reduzir o tempo até o resultado, oferecendo foco, prática e
            feedback.
          </p>

          {/* Cards de funcionalidades - responsivo */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-4 md:mt-6">
            <div className="rounded-xl border border-white/15 bg-white/5 p-4 hover:bg-white/10 transition-colors duration-200">
              <h3 className="font-semibold mb-1 text-sm sm:text-base">
                Quizzes
              </h3>
              <p className="text-xs sm:text-sm text-white/70">
                Perguntas para fixar o conteúdo.
              </p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-4 hover:bg-white/10 transition-colors duration-200">
              <h3 className="font-semibold mb-1 text-sm sm:text-base">
                Mão na massa
              </h3>
              <p className="text-xs sm:text-sm text-white/70">
                Projetos práticos e avaliações rápidas.
              </p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-4 hover:bg-white/10 transition-colors duration-200">
              <h3 className="font-semibold mb-1 text-sm sm:text-base">
                Feedbacks
              </h3>
              <p className="text-xs sm:text-sm text-white/70">
                Acompanhe seu desempenho em tempo real.
              </p>
            </div>
          </div>
        </div>

        {/* Placeholder de prévia - responsivo */}
        <div className="order-1 lg:order-2">
          <div className="aspect-video w-full rounded-xl border border-white/20 bg-white/5 flex items-center justify-center hover:border-white/30 transition-colors duration-200">
            <div className="text-white/70 text-center p-4 sm:p-6 md:p-8">
              <img src={fotoGamificacao} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
