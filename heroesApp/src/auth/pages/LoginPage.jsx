import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {

    //Para navegar al último paso antes de cerrar sesion
    const lastPath = localStorage.getItem('lasthPath') || '/';

    login( 'Fulanito' )
    //Se llama desde el navigate
    navigate(lastPath, {
      replace: true
    })
  }

  return (
    <div className="container mt-5">
    <h1>Login</h1>
    <hr />

    <button
    className="btn btn-outline-info"
    onClick={ handleLogin }
    >
    Login
    </button>
    </div>
  )
}
