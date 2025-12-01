import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function SignupForm({ onChangeScreen }) {
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Usuário logado com Google:", user);
      // Aqui você pode salvar o usuário no Firestore se quiser
    } catch (error) {
      console.error("Erro no login com Google:", error);
    }
  };

  return (
    <div className="w-full max-w-sm">
      <h2 className="text-center text-xl mb-6 tracking-widest">CADASTRO</h2>

      <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); navigate('/user'); }}>
        <input
          type="text"
          placeholder="Nome"
          className="bg-transparent border-b border-gray-500 p-2 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Sobrenome"
          className="bg-transparent border-b border-gray-500 p-2 focus:outline-none"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="bg-transparent border-b border-gray-500 p-2 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Senha"
          className="bg-transparent border-b border-gray-500 p-2 focus:outline-none"
        />

        {/* <p
          onClick={() => onChangeScreen("recovery")}
          className="text-sm text-gray-400 hover:text-white cursor-pointer text-right"
        >
          Esqueci minha senha
        </p> */}
        
        <div className="flex items-center justify-center w-auto m-3">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center gap-2  text-black  bg-white rounded-md px-10 py-2 hover:bg-gray-700"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google logo"
              className="w-5 h-5"
            />
            Entrar com Google
          </button>
        </div>

        <button
          type="submit"
          className="bg-white text-black rounded-md py-2 font-semibold hover:bg-gray-300"
        >
          Cadastrar
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            onChangeScreen("default");
          }}
          className="border border-gray-500 rounded-md py-2 mt-2 hover:bg-gray-700"
        >
          Login
        </button>

        
      </form>
    </div>
  );
}