import { Routes, Route } from "react-router-dom";
import LogoutPage from "./Pages/LogoutPage";
import LandingPage from "./Pages/LandingPage";
import NoPage from "./Pages/NoPage";
import Navbar from "./Common/NavBar";
import { AuthProvider } from "./authProvider";
import { LoginPage } from "./Pages/LoginPage";
import UserPage from "./Pages/UserPage";
import CreatePage from "./Pages/CreatePage";
import { RegisterPage } from "./Pages/RegisterPage";

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="logout" element={<LogoutPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}
