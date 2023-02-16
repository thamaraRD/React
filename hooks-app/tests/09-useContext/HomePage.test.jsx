import { render,screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe('testing en el componente <HomePage/>', () => { 

  const user = {

    id: 2,
    nombre: 'Thamara Ramos',
  };

  test('should de mostrar el componente sin el usuario', () => { 

    render(
    <UserContext.Provider value={{user: null}}>
      <HomePage/>
    </UserContext.Provider>
    )
    // screen.debug()

    const preTag = screen.getByLabelText('pre');
    // console.log(preTag);
    expect(preTag.innerHTML).toBe('null')

  });

  test('should de mostrar el componente con el usario', () => { 

    render(
      <UserContext.Provider value={{user: user}}>
        <HomePage/>
      </UserContext.Provider>
      )
      // screen.debug()
  
      const preTag = screen.getByLabelText('pre');
      // console.log(preTag);
      expect(preTag.innerHTML).toBeTruthy();

   })

});