import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('should getUser retornar un obj', () => { 
    
      const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
      };

      const user = getUser();
     expect ( testUser ).toEqual( user );
    });

    test('should getUsuarioActivo retornar un obj', () => { 
    
      const nombre = 'Thamara';

      const user = getUsuarioActivo(nombre);
      console.log(user);
      expect( user ).toEqual({
        uid: 'ABC567',
        username: nombre
      });


    });

  });