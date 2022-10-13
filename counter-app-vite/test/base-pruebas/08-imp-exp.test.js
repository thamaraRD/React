import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 

  test('should getHeroeById retornar un heroe by ID', () => { 

    const id = 1;
    const hero = getHeroeById(id);
    expect( hero ).toEqual({ 
      id: 1,
      name: "Batman",
      owner: "DC",
    })

  });
  test('should getHeroeById retornar undefined si no existe heroe by ID', () => { 

    const id = 23;
    const hero = getHeroeById(id);

    //Opción 1: toBeFalsy tambien evalua "false"
    expect( hero ).toBeFalsy();
   //Opción 2
   expect( hero ).toBe( undefined);
  });

});