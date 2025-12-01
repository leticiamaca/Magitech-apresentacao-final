import { useState, useEffect } from "react";

export default function QuizQuestion({ question, selectedOption, onSelectOption }) {
  const [showFeedback, setShowFeedback] = useState(false);
  
  // Reset feedback when question changes
  useEffect(() => {
    setShowFeedback(false);
  }, [question.id]);
  
  // Show feedback after selecting an option
  useEffect(() => {
    if (selectedOption !== undefined) {
      setShowFeedback(true);
    }
  }, [selectedOption]);
  
  const handleOptionSelect = (optionIndex) => {
    if (selectedOption === undefined) {
      onSelectOption(optionIndex);
    }
  };
  
  const getOptionClassName = (index) => {
    if (!showFeedback) {
      return selectedOption === index
        ? "border-teal-400 bg-teal-400/20"
        : "border-white/20 hover:border-white/50";
    }
    
    if (index === question.correctAnswer) {
      return "border-green-500 bg-green-500/20";
    }
    
    if (selectedOption === index && index !== question.correctAnswer) {
      return "border-red-500 bg-red-500/20";
    }
    
    return "border-white/20 opacity-50";
  };
  
  return (
    <div className="space-y-6">
      <h3 className="text-white text-xl font-medium">{question.question}</h3>
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(index)}
            disabled={showFeedback}
            className={`w-full text-left p-4 rounded-lg border transition-colors ${getOptionClassName(index)}`}
          >
            <div className="flex items-center gap-3">
              <div className={`flex-shrink-0 w-6 h-6 rounded-full border ${
                selectedOption === index ? "border-teal-400" : "border-white/50"
              } flex items-center justify-center`}>
                {showFeedback && index === question.correctAnswer && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {showFeedback && selectedOption === index && index !== question.correctAnswer && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
                {!showFeedback && selectedOption === index && (
                  <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                )}
              </div>
              <span className="text-white">{option}</span>
            </div>
          </button>
        ))}
      </div>
      
      {showFeedback && (
        <div className={`mt-4 p-4 rounded-lg ${
          selectedOption === question.correctAnswer
            ? "bg-green-500/20 border border-green-500/50"
            : "bg-red-500/20 border border-red-500/50"
        }`}>
          <p className="text-white">
            {selectedOption === question.correctAnswer
              ? "Correto! Boa resposta."
              : `Incorreto. A resposta correta é: ${question.options[question.correctAnswer]}`}
          </p>
        </div>
      )}
    </div>
  );
}
