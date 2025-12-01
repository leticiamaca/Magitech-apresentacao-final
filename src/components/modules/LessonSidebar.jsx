import { useState } from "react";
import { Link } from "react-router-dom";

export default function LessonSidebar({ modules, currentLessonId, courseId }) {
  const [expandedModules, setExpandedModules] = useState(
    // Initially expand all modules
    modules.reduce((acc, module) => {
      acc[module.id] = true;
      return acc;
    }, {})
  );

  const toggleModule = (moduleId) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
      <h3 className="text-white text-lg font-semibold mb-4">Conteúdo do Curso</h3>
      
      <div className="space-y-4">
        {modules.map((module) => (
          <div key={module.id} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
            {/* Module Header */}
            <button
              className="flex items-center justify-between w-full text-left text-white font-medium mb-2 hover:text-teal-400 transition-colors"
              onClick={() => toggleModule(module.id)}
            >
              <span className="line-clamp-2">{module.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform ${expandedModules[module.id] ? 'transform rotate-180' : ''}` }
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Lessons List */}
            {expandedModules[module.id] && (
              <div className="pl-2 space-y-2 mt-2">
                {module.lessons.map((lesson) => (
                  <Link
                    key={lesson.id}
                    to={`/module/${courseId}/lesson/${lesson.id}`}
                    className={`flex items-center gap-2 py-1 px-2 rounded-md transition-colors ${
                      currentLessonId === lesson.id
                        ? "bg-teal-400/20 text-teal-400"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {currentLessonId === lesson.id ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <span className="line-clamp-1">{lesson.title}</span>
                    <span className="ml-auto text-xs text-white/50">{lesson.duration}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
