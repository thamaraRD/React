import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("06-desestructuracion de objetos", () => {
  test("should desestructuracion de obj usContext", () => {
    const clave = "lololo";
    const edad = 18;

    const context = usContext({ clave, edad });

    expect(context).toEqual({
      nombreClave: clave,
      edad: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
