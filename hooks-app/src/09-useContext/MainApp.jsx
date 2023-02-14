import { Navigate, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="about" element={ <AboutPage /> } />
        <Route path="login" element={ <LoginPage /> } />

      {/* Ruta Comodín */}
        <Route path="/*" element={ <Navigate to="/about" /> } />
      </Routes>
    </UserProvider>
  );
};
