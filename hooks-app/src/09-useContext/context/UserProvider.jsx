import { UserContext } from "./UserContext";

const user = {
    id: 111,
    nombre: 'Thamara Ramos',
    email: 'dkksks@fkfk.com'
}


export const UserProvider = ({ children }) => {
  return (
    <div>
        <UserContext.Provider value={{ user }}>
            { children }
        </UserContext.Provider>
    </div>
  )
};
