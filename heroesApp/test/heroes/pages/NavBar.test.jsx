import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { NavBar } from "../../../src/heroes/pages/NavBar";


//Para mockear las funciones de react-router-dom que es externo y esparcirlas, en este caso solo tomar
//la que se necesite como en este caso UseNavigate.
const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate

}));

describe('Pruebas en el <NavBar />', () => {

  const contextValue = {
    logged: true,
    user: {
      name: 'Thamara Ramos'
    },
    logout:jest.fn()
  };

  beforeEach(() => jest.clearAllMocks());

  test('should de mostrar el nombre del usuario logueado', () => {

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <NavBar/>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    // screen.debug();
    expect(screen.getByText('Thamara Ramos')).toBeTruthy()
   })

   test('should de llamar el logout y el navigate cuando se hace click en el boton', () => { 

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <NavBar/>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    const logoutBtn = screen.getByRole('button');
    fireEvent.click(logoutBtn);

    expect( contextValue.logout ).toHaveBeenCalled();
    expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {replace: true});
    
    })

 })