import { useContext } from "react";
import { UserContext } from "./context/UserContext";



export const HomePage = () => {

  const { user } = useContext( UserContext );
  
    return (
      <div>
        <h1>HomePage de { user?.nombre }</h1>
        <hr />
        <pre aria-label="pre">
          {JSON.stringify(user, null, 3)}
        </pre>
      </div>
    );
  };