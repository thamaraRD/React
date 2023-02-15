import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('pruebas en todoReducer', () => { 

  const initialState = {
    id: 1,
    description: 'testing al reducer',
    done: false
  }

  test('should de regresar el estado inicial', () => { 

    const newState = todoReducer( initialState, {} );
    expect( newState ).toBe( initialState );

  });

  test('should de agregar un TODO', () => { 

    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'Agg TODO',
        done: false
      }
    };

    const newState = todoReducer( initialState, action );
    expect( newState.length ).toBe( 3 );

   })

   test('should de remover un TODO', () => { 


    })

  test('should de realizar el toggle del todo', () => { 

    
   })

});