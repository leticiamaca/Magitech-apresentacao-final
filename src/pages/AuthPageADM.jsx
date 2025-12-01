import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ParticlesBackground from "../components/common/ParticlesBackground";
import { LoginForm, SignupForm, RecoveryForm } from "../components/authADM";
import bg from "../assets/fotoLogin.png";

export default function AuthPage() {
  const [screen, setScreen] = useState("login");
  const location = useLocation();

  useEffect(() => {
    if (location.state?.screen) {
      setScreen(location.state.screen);
    }
  }, [location.state]);

  const renderForm = () => {
    switch (screen) {
      case "signup":
        return <SignupForm onChangeScreen={setScreen} />;
      case "recovery":
        return <RecoveryForm onChangeScreen={setScreen} />;
      default:
        return <LoginForm onChangeScreen={setScreen} />;
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      {/* Container responsivo */}
      <div className="relative z-10 w-full lg:w-[70vw] flex flex-col lg:flex-row h-auto lg:h-[80vh] bg-gradient-to-br from-[#11302B] via-[#040B0A] to-[#091A17] text-white justify-center lg:rounded-xl shadow-xl/20">
        
        {/* Imagem - escondida no mobile, visível no desktop */}
        <div className="hidden lg:flex lg:w-[45%] items-center justify-center rounded-xl p-4">
          <img src={bg} alt="VR" className="h-[95%] w-full object-contain" />
        </div>

        {/* Formulário - tela inteira no mobile, lado direito no desktop */}
        <div className="w-full lg:w-[55%] flex flex-col items-center justify-center backdrop-blur-md bg-white/5 border-t lg:border-t-0 lg:border-l border-white/10 rounded-md p-8 lg:p-12 min-h-screen lg:min-h-[500px]">
          {renderForm()}
        </div>
      </div>
    </div>
  );
}