export default function HandsOnSection({ data }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
      
      <p className="text-white text-center mb-6 max-w-lg">
        {data.description}
      </p>
      
      <a 
        href={data.apkUrl} 
        download
        className="
          bg-gradient-to-r from-teal-400 to-blue-500 
          text-white font-medium px-8 py-3 rounded-lg 
          inline-flex items-center gap-2 
          transform hover:scale-105 transition-transform
          shadow-lg shadow-teal-500/20
        "
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        BAIXAR JOGO
      </a>
    </div>
  );
}
