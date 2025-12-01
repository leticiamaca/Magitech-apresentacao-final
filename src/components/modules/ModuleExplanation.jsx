import { useState } from 'react';

export default function ModuleExplanation({ text }) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="w-full">
      <div className={`
        text-white/80 text-sm leading-relaxed
        ${expanded ? '' : 'line-clamp-3'}
        transition-all duration-300
      `}>
        {text}
      </div>
      
      {text && text.length > 100 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="
            mt-2 px-4 py-1 rounded-full 
            text-xs font-medium
            bg-gradient-to-r from-teal-500/20 to-blue-500/20 
            text-teal-400 hover:text-white 
            border border-teal-500/30
            transition-colors duration-200
            flex items-center gap-1
          "
        >
          {expanded ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Mostrar menos
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Mostrar mais
            </>
          )}
        </button>
      )}
    </div>
  );
}
