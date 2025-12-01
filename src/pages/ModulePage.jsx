import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { UserNavbar } from "../components/user";
import Footer from "../components/default/Footer";
import {
  VideoPlayer,
  Quiz,
  HandsOnSection,
  FeedbackSection,
} from "../components/modules";
import TextExplanation from "../components/modules/TextExplanation";
import CabosText from "../components/modules/cabosInfoText";
export default function ModulePage() {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(true);

  // Dados do curso - aqui você pode editar os textos, vídeos e conteúdos
  const courseTitle = "VR COMO CABEAR UM CABO DE REDE";
  const moduleTitle = "MÓDULO VR";

  // Cada "aula" representa uma seção diferente do módulo
  const lessons = [
    {
      id: "1",
      title: "Explicação do módulo",
      type: "explanation", // Define qual componente mostrar
      content: {
        text: <CabosText />,
      },
    },
    {
      id: "2",
      title: "Vídeo Aula",
      type: "video",
      content: {
        videoUrl: "https://youtu.be/OzBqMDYfhqk?si=mdy13-7h2nXTHpon",
      },
    },
    {
      id: "3",
      title: "Quizz",
      type: "quiz",
      content: {
        questions: [
          {
            id: "q1",
            question:
              "A MÃO NA MASSA DESSE PROJETO É BAIXAR O JOGO VR DISPONIBILIZADO ABAIXO.",
            options: ["VERDADEIRO", "FALSO"],
            correctAnswer: 0,
          },
          {
            id: "q2",
            question:
              "O alicate de crimpagem é a ferramenta correta para prender conectores RJ45 ao cabo de rede.",
            options: ["VERDADEIRO", "FALSO"],
            correctAnswer: 0,
          },
          {
            id: "q3",
            question:
              "Na crimpagem padrão T568B, a sequência de cores inicia com branco/verde e verde.",
            options: ["VERDADEIRO", "FALSO"],
            correctAnswer: 1,
          },
          {
            id: "q4",
            question:
              "Antes de crimpar, é necessário retirar cerca de 2 a 3 cm da capa externa do cabo UTP.",
            options: ["VERDADEIRO", "FALSO"],
            correctAnswer: 0,
          },
          {
            id: "q5",
            question:
              "Um cabo mal crimpado pode causar perda de conexão ou baixa velocidade na rede.",
            options: ["VERDADEIRO", "FALSO"],
            correctAnswer: 0,
          },
          {
            id: "q6",
            question:
              "Na crimpagem, os fios devem ser inseridos no conector até tocarem completamente o fundo do RJ45.",
            options: ["VERDADEIRO", "FALSO"],
            correctAnswer: 0,
          },
        ],
      },
    },
    {
      id: "4",
      title: "Mão na massa",
      type: "handson",
      content: {
        title: "MÃO NA MASSA",
        description:
          "A MÃO NA MASSA DESSE PROJETO É BAIXAR O JOGO VR DISPONIBILIZADO ABAIXO.\nÉ INTERESSANTE ACOMPANHAR AS AULAS JUNTO COM O JOGO.",
        apkUrl: "/downloads/vr_game.apk",
      },
    },
    {
      id: "5",
      title: "FeedBack",
      type: "feedback",
      content: {
        title: "Feedback",
        description: "Acompanhe seu feedback do módulo:",
      },
    },
  ];

  // Pega a aula atual baseado no ID da URL (padrão é a primeira)
  const currentId = lessonId || "1";
  const currentLesson =
    lessons.find((lesson) => lesson.id === currentId) || lessons[0];

  // Função para abrir/fechar o menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Função para ir para a próxima aula
  const nextLesson = () => {
    const currentIndex = lessons.findIndex(
      (lesson) => lesson.id === currentLesson.id
    );
    if (currentIndex < lessons.length - 1) {
      const nextLessonItem = lessons[currentIndex + 1];
      navigate(`/module/${courseId}/lesson/${nextLessonItem.id}`);
    }
  };

  // Função que decide qual componente renderizar baseado no tipo da aula
  const renderLessonContent = () => {
    switch (currentLesson.type) {
      case "explanation":
        return <TextExplanation text={currentLesson.content.text} />;

      case "video":
        return (
          <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 p-1 rounded-xl max-w-3xl mx-auto">
            <div className="rounded-lg overflow-hidden">
              <VideoPlayer videoUrl={currentLesson.content.videoUrl} />
            </div>
          </div>
        );

      case "quiz":
        return (
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
            <Quiz questions={currentLesson.content.questions} />
          </div>
        );

      case "handson":
        return (
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
            <HandsOnSection data={currentLesson.content} />
          </div>
        );

      case "feedback":
        return (
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
            <FeedbackSection data={currentLesson.content} courseId={courseId} />
          </div>
        );

      default:
        return <p className="text-white">Conteúdo não encontrado</p>;
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Barra de navegação */}
      <UserNavbar />

      <div className="flex flex-1">
        {/* Menu lateral */}
        <aside
          className={`
          ${menuOpen ? "translate-x-0" : "-translate-x-full"} 
          fixed top-0 md:relative md:translate-x-0 
          w-[260px] md:w-[280px] h-screen
          bg-black/40 backdrop-blur-md 
          border-r border-white/10 
          transition-transform duration-300 ease-in-out 
          overflow-hidden
          z-50
        `}
        >
          {/* Cabeçalho do menu */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <h2 className="text-white text-lg font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              {moduleTitle}
            </h2>
            <button
              className="md:hidden text-white/80 hover:text-white"
              onClick={toggleMenu}
              aria-label="Fechar Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Lista de aulas */}
          <div className="p-4 overflow-y-auto max-h-[calc(100vh-100px)]">
            <p className="text-white/50 text-xs uppercase font-medium mb-4 tracking-wider">
              Aulas do Módulo
            </p>
            <div className="space-y-2">
              {lessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  to={`/module/${courseId}/lesson/${lesson.id}`}
                  className={`
                    block py-3 px-4 rounded-lg 
                    transition-all duration-200 
                    ${
                      currentLesson.id === lesson.id
                        ? "bg-gradient-to-r from-teal-500/20 to-blue-500/20 border-l-4 border-teal-400"
                        : "hover:bg-white/5"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`
                      w-8 h-8 rounded-full flex items-center justify-center 
                      ${
                        currentLesson.id === lesson.id
                          ? "bg-teal-400 text-black"
                          : "bg-white/10 text-white"
                      }
                    `}
                    >
                      {lesson.id}
                    </div>
                    <p
                      className={`text-sm ${
                        currentLesson.id === lesson.id
                          ? "text-white font-medium"
                          : "text-white/80"
                      }`}
                    >
                      {lesson.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Botão para abrir menu no mobile */}
        <button
          className={`
            fixed top-20 left-4 z-40 
            md:hidden 
            bg-gradient-to-r from-teal-400 to-blue-500 
            text-white p-3 rounded-full shadow-lg 
            ${menuOpen ? "opacity-0" : "opacity-100"} 
            transition-opacity duration-300
          `}
          onClick={toggleMenu}
          aria-label="Abrir Menu de Aulas"
          disabled={menuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Conteúdo principal */}
        <div className="flex-1 overflow-y-auto md:ml-4 lg:ml-8">
          <section className="min-h-screen flex flex-col justify-center py-16 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto w-full">
              {/* Cabeçalho da aula */}
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-6">
                <h1 className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-0 text-center md:text-left">
                  <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                    {courseTitle}
                  </span>
                </h1>
                <div className="flex items-center gap-2">
                  <span className="text-white/50 text-sm">
                    Aula {currentLesson.id} de {lessons.length}
                  </span>
                  <button
                    className="bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs px-4 py-2 rounded-md shadow-lg"
                    onClick={nextLesson}
                  >
                    PRÓXIMA AULA
                  </button>
                </div>
              </div>

              {/* Título da aula atual */}
              <h2 className="text-white text-center text-xl md:text-2xl font-bold mb-8">
                <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                  {currentLesson.title}
                </span>
              </h2>

              {/* Conteúdo da aula (muda baseado no tipo) */}
              {renderLessonContent()}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
