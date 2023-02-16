import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const { user, setUser } = useContext( UserContext );

    return (
      <div>
        <h1>LoginPage</h1>
        <hr />

      <pre aria-label="pre">
        { JSON.stringify( user, null, 2 ) }
      </pre>
      <button
      className="btn btn-success"
      onClick={() => setUser({ id: 222, nombre: 'Jesus', email: 'jesus@jesus.com' })}
      >
        Establecer usuario
      </button>

      </div>
    );
  };