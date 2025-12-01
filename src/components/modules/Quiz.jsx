import { useState } from "react";

export default function Quiz({ questions }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0); // NOVO
  const [quizFinished, setQuizFinished] = useState(false); // NOVO

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (index) => {
    if (!showFeedback) {
      setSelectedOption(index);
    }
  };

  const handleVerify = () => {
    if (selectedOption !== null) {
      setShowFeedback(true);
      // NOVO: Conta pontuação
      if (selectedOption === currentQuestion.correctAnswer) {
        setScore((prev) => prev + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      // NOVO: Finaliza quiz
      setQuizFinished(true);
    }
  };

  // NOVO: Função para reiniciar
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setQuizFinished(false);
  };

  const isCorrect = showFeedback
    ? selectedOption === currentQuestion.correctAnswer
    : false;

  // NOVO: Tela de feedback final
  if (quizFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    let message = "";

    if (percentage === 100) message = "Perfeito! Continue assim!";
    else if (percentage >= 70)
      message = "Muito bem! Continue se esforçando!";
    else if (percentage >= 50) message = "Bom trabalho! Continue estudando!";
    else message = "Continue tentando! Você consegue!";

    return (
      <div className="flex flex-col items-center">
        <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 w-full max-w-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Quiz Finalizado!
          </h2>
          <p className="text-6xl font-bold text-teal-400 mb-2">
            {score}/{questions.length}
          </p>
          <p className="text-xl text-white/80 mb-6">{message}</p>
          <button
            onClick={handleRestart}
            className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition"
          >
            REFAZER QUIZ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-6 w-full max-w-lg mb-8">
        <p className="text-white text-center text-lg font-medium mb-8">
          {currentQuestion.question}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-8">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className={`
                flex items-center gap-3 p-3 rounded-lg cursor-pointer
                ${
                  selectedOption === index
                    ? "bg-white/10 border border-white/20"
                    : "hover:bg-white/5"
                }
                transition-colors duration-200
              `}
              onClick={() => handleOptionSelect(index)}
            >
              <div
                className={`
                w-6 h-6 rounded-full flex items-center justify-center
                ${
                  selectedOption === index
                    ? "bg-gradient-to-r from-teal-400 to-blue-500"
                    : "border border-white/50"
                }
              `}
              >
                {selectedOption === index && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <span className="text-white text-sm">{option}</span>
            </div>
          ))}
        </div>
      </div>

      {showFeedback && (
        <div
          className={`
          text-center mb-6 p-4 rounded-lg
          ${
            isCorrect
              ? "bg-green-500/20 border border-green-500/30"
              : "bg-red-500/20 border border-red-500/30"
          }
        `}
        >
          <p
            className={`text-lg font-medium ${
              isCorrect ? "text-green-400" : "text-red-400"
            }`}
          >
            {isCorrect ? "RESPOSTA CORRETA!" : "RESPOSTA ERRADA :("}
          </p>
        </div>
      )}

      <div className="flex gap-4">
        <button
          className={`
            px-6 py-2 rounded-lg font-medium text-sm
            ${
              selectedOption === null || showFeedback
                ? "bg-gray-700/50 text-white/50 cursor-not-allowed"
                : "bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transform hover:scale-105 transition-all"
            }
          `}
          onClick={handleVerify}
          disabled={selectedOption === null || showFeedback}
        >
          VERIFICAR
        </button>
        <button
          className={`
            px-6 py-2 rounded-lg font-medium text-sm
            ${
              !showFeedback && currentQuestionIndex < questions.length - 1
                ? "bg-gray-700/50 text-white/50 cursor-not-allowed"
                : "bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transform hover:scale-105 transition-all"
            }
          `}
          onClick={handleNext}
          disabled={
            !showFeedback && currentQuestionIndex < questions.length - 1
          }
        >
          PRÓXIMO
        </button>
      </div>
    </div>
  );
}
