import React, { memo } from 'react';

function TextExplanation({ text = "" }){
  return (
    <div className="w-full min-h-[20vh] bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 flex justify-center items-center mx-auto">
      <p className="text-white text-center text-sm md:text-base leading-relaxed">
        {text || ""}
      </p>
    </div>
  );
}

export default memo(TextExplanation);