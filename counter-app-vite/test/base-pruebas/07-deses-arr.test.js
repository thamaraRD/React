
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"


describe('Pruebas 07-deses-arr', () => { 
  
  test('should retornar string y arreglo', () => { 

    const [ letters, numbers ] = retornaArreglo();

    //Opcion 1
    expect ( letters ).toBe('ABC');
    expect ( numbers ).toBe(123);
    ///Opcion 2
    expect(typeof letters).toBe('string'); 
    expect(typeof numbers).toBe('number');
    ///Opcion 3
    expect( letters ).toEqual(expect.any(String))
    expect( numbers ).toEqual(expect.any(Number))
  })


})