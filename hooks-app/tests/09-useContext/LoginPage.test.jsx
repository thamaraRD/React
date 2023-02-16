import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('pruebas en el componente <LoginPage />', () => { 

  const setUserMock = jest.fn();

  test('should de mostrar el componente sin el usuario', () => { 

    render(
      <UserContext.Provider value={{user: null}}>
        <LoginPage/>
      </UserContext.Provider>
      )
      // screen.debug()
  
      const preTag = screen.getByLabelText('pre');
      // console.log(preTag);
      expect(preTag.innerHTML).toBe('null')

  });

  test('should de llamar el setUser cuando se hace click en el boton', () => { 

    render(
      <UserContext.Provider value={{user: null, setUser: setUserMock}}>
        <LoginPage/>
      </UserContext.Provider>
      )

      const button = screen.getByRole('button')
      fireEvent.click(button);
      expect(setUserMock).toHaveBeenCalledWith({"email": "jesus@jesus.com", "id": 222, "nombre": "Jesus"})


   });

});