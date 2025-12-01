export default function UserProgress() {
    const progressItems = [
        {
            id: 1,
            text: "Textos explicativos e fáceis de entender"
        },
        {
            id: 2,
            text: "Quizzes interativos para validar o conhecimento"
        },
        {
            id: 3,
            text: "Mão na massa para aplicar o conhecimento"
        },
        {
            id: 4,
            text: "Feedback para melhorar o aprendizado"
        }
    ];

    return (
        <section className="py-40 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-white text-[45px] font-bold mb-2">
                        ESTUDE DE
                    </h2>
                    <h2 className="text-white text-[45px] font-bold">
                        FORMA <span className="text-teal-400">CRIATIVA</span> E <span className="text-teal-400">GAMIFICADA</span>
                    </h2>
                </div>

                {/* Progress Cards */}
                <div className=" w-full h-100vh bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8">
                    <div className="space-y-6">
                        {progressItems.map((item) => (
                            <div key={item.id} className="flex items-center gap-4">
                                {/* Check icon */}
                                <div className="flex-shrink-0 w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center">
                                    <svg 
                                        className="w-4 h-4 text-white" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M5 13l4 4L19 7" 
                                        />
                                    </svg>
                                </div>
                                
                                {/* Text */}
                                <p className="text-white/90 text-sm md:text-base flex-1">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
