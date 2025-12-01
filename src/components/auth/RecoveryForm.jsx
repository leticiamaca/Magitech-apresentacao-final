import { useState } from 'react';

export default function RecoveryForm({ onChangeScreen }) {
  const [email, setEmail] = useState('');
  const [recoveryCode, setRecoveryCode] = useState('');
  const [serverCode, setServerCode] = useState(null);
  const [sending, setSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [codeVerified, setCodeVerified] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSendCode = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setSending(true);

    try {
      const response = await fetch('http://localhost:3001/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setEmailSent(true);
        setServerCode(data.code);
        setSuccess('Email enviado com sucesso! Verifique sua caixa de entrada.');
      } else {
        setError(data.message || 'Erro ao enviar email');
      }
    } catch (error) {
      setError('Erro ao conectar com o servidor. Verifique se o backend está rodando.');
    } finally {
      setSending(false);
    }
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    setError('');
    if (recoveryCode === serverCode.toString()) {
      setCodeVerified(true);
      setSuccess('Código verificado com sucesso!');
    } else {
      setError('Código inválido. Verifique e tente novamente.');
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setError('');
    
    if (newPassword !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }
    if (newPassword.length < 6) {
      setError('A senha deve ter no mínimo 6 caracteres');
      return;
    }
    
    // Aqui você salvaria a nova senha no banco de dados
    setSuccess('Senha redefinida com sucesso!');
    setTimeout(() => {
      onChangeScreen('default');
    }, 2000);
  };

  return (
    <div className="w-full max-w-sm">
      <h2 className="text-center text-xl mb-6 tracking-widest">
        RECUPERAÇÃO DE SENHA
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-400/40 rounded-md">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {success && (
        <div className="mb-4 p-3 bg-green-500/20 border border-green-400/40 rounded-md">
          <p className="text-green-400 text-sm">{success}</p>
        </div>
      )}

      {/* Etapa 1: Solicitar código */}
      {!emailSent && (
        <form onSubmit={handleSendCode} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Digite seu email"
            className="bg-transparent border-b border-gray-500 p-2 focus:outline-none"
          />

          <button
            type="submit"
            disabled={sending}
            className="bg-white text-black rounded-md py-2 font-semibold hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sending ? 'Enviando...' : 'Enviar Código'}
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              onChangeScreen('default');
            }}
            className="border border-gray-500 rounded-md py-2 hover:bg-gray-700"
          >
            Voltar para LOGIN
          </button>
        </form>
      )}

      {/* Etapa 2: Verificar código */}
      {emailSent && !codeVerified && (
        <form onSubmit={handleVerifyCode} className="flex flex-col gap-4">
          <p className="text-gray-400 text-sm text-center">
            Digite o código de 6 dígitos enviado para <strong className="text-white">{email}</strong>
          </p>

          <input
            type="text"
            value={recoveryCode}
            onChange={(e) => setRecoveryCode(e.target.value)}
            required
            maxLength="6"
            placeholder="000000"
            className="bg-transparent border-b border-gray-500 p-2 focus:outline-none text-center text-2xl tracking-widest"
          />

          <button
            type="submit"
            className="bg-white text-black rounded-md py-2 font-semibold hover:bg-gray-300"
          >
            Verificar Código
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              setEmailSent(false);
              setError('');
              setSuccess('');
            }}
            className="border border-gray-500 rounded-md py-2 hover:bg-gray-700 text-sm"
          >
            Reenviar Código
          </button>
        </form>
      )}

      {/* Etapa 3: Redefinir senha */}
      {codeVerified && (
        <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            minLength="6"
            placeholder="Nova senha (mín. 6 caracteres)"
            className="bg-transparent border-b border-gray-500 p-2 focus:outline-none"
          />

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength="6"
            placeholder="Confirmar nova senha"
            className="bg-transparent border-b border-gray-500 p-2 focus:outline-none"
          />

          <button
            type="submit"
            className="bg-white text-black rounded-md py-2 font-semibold hover:bg-gray-300"
          >
            Redefinir Senha
          </button>
        </form>
      )}
    </div>
  );
}