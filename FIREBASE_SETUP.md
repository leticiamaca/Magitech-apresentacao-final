# Configuração do Firebase

## 🔥 Como configurar o Firebase no projeto

### 1. Criar projeto no Firebase Console

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Clique em "Adicionar projeto"
3. Digite o nome do projeto (ex: "magitech-learning")
4. Configure o Google Analytics (opcional)
5. Clique em "Criar projeto"

### 2. Configurar Authentication

1. No painel do Firebase, vá em **Authentication**
2. Clique em "Começar"
3. Na aba **Sign-in method**, habilite:
   - **Google** (para login com Google)
   - **Email/senha** (para login tradicional)

### 3. Obter as credenciais do projeto

1. Vá em **Configurações do projeto** (ícone de engrenagem)
2. Na aba **Geral**, role até "Seus aplicativos"
3. Clique em **Web** (ícone `</>`)
4. Digite um nome para o app (ex: "magitech-web")
5. Copie as credenciais que aparecem

### 4. Configurar variáveis de ambiente

1. Copie o arquivo `.env.example` para `.env`:
   ```bash
   cp .env.example .env
   ```

2. Preencha o arquivo `.env` com suas credenciais:
   ```env
   VITE_FIREBASE_API_KEY=sua-api-key-aqui
   VITE_FIREBASE_AUTH_DOMAIN=seu-projeto.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=seu-projeto-id
   VITE_FIREBASE_STORAGE_BUCKET=seu-projeto.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=seu-sender-id
   VITE_FIREBASE_APP_ID=seu-app-id
   ```

### 5. Configurar domínios autorizados

1. No Firebase Console, vá em **Authentication**
2. Clique na aba **Settings**
3. Em **Authorized domains**, adicione:
   - `localhost` (para desenvolvimento)
   - Seu domínio de produção

## 🚀 Funcionalidades implementadas

- ✅ **Login com Google**: Botão no SignupForm
- ✅ **Autenticação**: Configuração completa
- ✅ **Firestore**: Banco de dados configurado
- ✅ **Variáveis de ambiente**: Segurança das credenciais

## 🔧 Arquivos criados

- `src/firebaseConfig.js` - Configuração principal do Firebase
- `.env.example` - Exemplo de variáveis de ambiente
- `FIREBASE_SETUP.md` - Este guia de configuração

## ⚠️ Importante

- **Nunca commite o arquivo `.env`** - ele já está no `.gitignore`
- **Mantenha suas credenciais seguras**
- **Configure as regras de segurança do Firestore** quando necessário

## 🐛 Solução de problemas

Se ainda houver erros:

1. Verifique se o arquivo `.env` existe e está preenchido
2. Reinicie o servidor de desenvolvimento (`npm run dev`)
3. Verifique se os domínios estão autorizados no Firebase Console
