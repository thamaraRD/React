import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";
import { AppRoutes } from "../../src/router/AppRoutes";

describe("pruebas en <AppRoutes/>", () => {
  test("should de mostrar el login si no está autenticado", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRoutes />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    // screen.debug();
    expect(screen.getAllByText('Login').length).toBe(2)
  });

  test('should de mostrar el componente Marvel si está autenticado', () => { 
    const contextValue = {
      logged: true,
      user: {
        id: 'ABC',
        name: 'Jesús'
      }
    };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRoutes />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    // screen.debug();

    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);

   })

});
