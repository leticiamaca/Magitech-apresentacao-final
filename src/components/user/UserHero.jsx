import vrImage from "../../assets/fotoMeninaVR.png";
import traco from "../../assets/traco.svg";
export default function UserHero() {
    return (
        <section className="w-full h-[100vh] min-h-[100vh] py-16 px-4 md:px-8 bg-gradient-to-br from-[#4DE0C680] via-[#000] to-[#1C0D15]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left side - Text content */}
                <div className="text-white space-y-6">
                    <div className=" m-auto flex items-left space-x-4"> <img src={traco} alt="Traco" />
                    <p className="text-[35px]">  MAGITECH <span className="text-teal-400/70">LEARNING</span></p> </div>
                   
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase">
                        Uma nova forma
                        <br />
                        <span className="text-teal-400">de aprender</span>
                    </h1>
                </div>

                {/* Right side - VR Image */}
                <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                        <img 
                            src={vrImage} 
                            alt="Pessoa usando óculos VR" 
                            className="w-screen h-[800px] object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
