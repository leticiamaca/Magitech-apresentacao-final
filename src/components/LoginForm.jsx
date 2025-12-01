import { useNavigate } from "react-router-dom";

export default function LoginForm({ onChangeScreen }) {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-sm">
      <h2 className="text-center text-xl mb-6 tracking-widest">LOGIN</h2>

      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Usuário" className="bg-transparent border-b border-gray-500 p-2 focus:outline-none" />
        <input type="password" placeholder="Senha" className="bg-transparent border-b border-gray-500 p-2 focus:outline-none" />

        <p
          onClick={() => onChangeScreen("recovery")}
          className="text-sm text-gray-400 hover:text-white cursor-pointer text-right"
        >
          Esqueci minha senha
        </p>

        <button
          onClick={(e) => { e.preventDefault(); navigate('/user'); }}
          className="bg-white text-black rounded-md py-2 font-semibold hover:bg-gray-300"
        >
          Entrar
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            onChangeScreen("signup");
          }}
          className="border border-gray-500 rounded-md py-2 mt-2 hover:bg-gray-700"
        >
          Cadastre-se
        </button>
      </form>
    </div>
  );
}