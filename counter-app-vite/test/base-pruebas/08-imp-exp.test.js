import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
  test("should getHeroeById retornar un heroe by ID", () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });
  test("should getHeroeById retornar undefined si no existe heroe by ID", () => {
    const id = 23;
    const hero = getHeroeById(id);

    //Opción 1: toBeFalsy tambien evalua "false"
    expect(hero).toBeFalsy();
    //Opción 2
    expect(hero).toBe(undefined);
  });

  test("should getHeroesByOwner retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const ownerHero = getHeroesByOwner(owner);

    console.log(ownerHero);

    expect(ownerHero.length).toBe(3);
    expect(ownerHero).toEqual([
      { id: 1, name: "Batman", owner: "DC"},
      { id: 3,name: "Superman", owner: "DC"},
      { id: 4,name: "Flash", owner: "DC"},
    ]);
  });

  test('should getHeroesByOwner retornar un arreglo con los heroes de Marvel', () => { 

    const owner = 'Marvel'
    const ownerHero = getHeroesByOwner(owner);

    expect( ownerHero ).toEqual([
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' }
    ]);
    expect( ownerHero.length ).toEqual(2);

   });
});
