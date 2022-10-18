import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("09-promesas", () => {

  test("should getHeroeByIdAsync retornar un heroe", (done) => {
    const id = 1;
    
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });

      done();

    });
  });

  test('should getHeroeByIdAsync retornar un error si heroe no existe', (done) => { 

    const id = 100;

    getHeroeByIdAsync( id ).catch(
      error => {
        console.log(error);
        
        expect(error).toBe(`No se pudo encontrar el héroe ${id}`);

        done();
      });
  })

});
