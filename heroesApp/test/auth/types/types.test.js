import { types } from "../../../src/auth/types/types";

describe("Pruebas en Types.js", () => {
  test("should de regresar dichos types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
