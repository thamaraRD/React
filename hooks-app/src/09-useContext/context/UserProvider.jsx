import { useState } from "react";
import { UserContext } from "./UserContext";

const user = {
    id: 111,
    nombre: 'Thamara Ramos',
    email: 'dkksks@fkfk.com'
}



export const UserProvider = ({ children }) => {

  const [user, setUser] = useState();
  return (
    <div>
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    </div>
  )
};
