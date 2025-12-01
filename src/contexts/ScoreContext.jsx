import { createContext, useState, useEffect } from "react";

// Create context
export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [quizScores, setQuizScores] = useState([]);
  
  // Load scores from localStorage on initial render
  useEffect(() => {
    const savedScores = localStorage.getItem("quizScores");
    if (savedScores) {
      try {
        setQuizScores(JSON.parse(savedScores));
      } catch (error) {
        console.error("Error parsing saved scores:", error);
      }
    }
  }, []);
  
  // Save scores to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("quizScores", JSON.stringify(quizScores));
  }, [quizScores]);
  
  // Add a new quiz score
  const addQuizScore = (score) => {
    setQuizScores(prev => [...prev, score]);
  };
  
  // Get all scores
  const getAllScores = () => {
    return quizScores;
  };
  
  // Get scores for a specific quiz
  const getScoresByQuizId = (quizId) => {
    return quizScores.filter(score => score.quizId === quizId);
  };
  
  // Get the latest score for a specific quiz
  const getLatestScoreByQuizId = (quizId) => {
    const filteredScores = quizScores.filter(score => score.quizId === quizId);
    if (filteredScores.length === 0) return null;
    
    // Sort by date (newest first) and return the first one
    return filteredScores.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  };
  
  // Get average score across all quizzes
  const getAverageScore = () => {
    if (quizScores.length === 0) return 0;
    
    const totalScore = quizScores.reduce((sum, score) => sum + score.score, 0);
    return Math.round(totalScore / quizScores.length);
  };
  
  // Get total number of quizzes completed
  const getTotalQuizzesCompleted = () => {
    // Get unique quiz IDs
    const uniqueQuizIds = new Set(quizScores.map(score => score.quizId));
    return uniqueQuizIds.size;
  };
  
  // Clear all scores
  const clearAllScores = () => {
    setQuizScores([]);
  };
  
  return (
    <ScoreContext.Provider
      value={{
        quizScores,
        addQuizScore,
        getAllScores,
        getScoresByQuizId,
        getLatestScoreByQuizId,
        getAverageScore,
        getTotalQuizzesCompleted,
        clearAllScores
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};
