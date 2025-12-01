import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthPage from "./pages/AuthPage";
import Default from "./pages/Default";
import UserPage from "./pages/UserPage";
import ModulePage from "./pages/ModulePage";
import { ScoreProvider } from "./contexts/ScoreContext";
import AdmComponent from "./components/adm/AdmComponent";
// import AdmComponentPage from "./components/adm/AdmComponentPage";
import UserInfoPage from "./pages/UserInfoPage";
import ErrorPage from "./pages/ErrorPage";
import AuthPageADM from "./pages/AuthPageADM.jsx";
function App() {
  return (
    <ScoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/adm/login" element={<AuthPageADM />} />
          <Route path="/adm" element={<AdmComponent />} />
          <Route path="/module/:courseId" element={<ModulePage />} />
          <Route path="/module/:courseId/lesson/:lessonId" element={<ModulePage />} />
          <Route path="/user/info" element={<UserInfoPage />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ScoreProvider>
  );
}

export default App
