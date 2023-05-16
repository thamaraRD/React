import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe("pruebas en <PrivateRoute />", () => {
  
  test("should de navegar si está autenticado", () => {

    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        name: "Thamara",
        id: "123",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/Marvel']}>
                <PrivateRoute>
                  <h1>Página Marvel</h1>
                </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    screen.debug();
    expect(screen.getByText("Página Marvel")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/Marvel')
  });
});
