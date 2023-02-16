import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('pruebas en todoReducer', () => { 

  const initialState = [{
    id: 1,
    description: 'testing al reducer',
    done: false
  }]

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
    // console.log(newState);
    expect( newState.length ).toBe(2);
    expect( newState ).toContain(action.payload);

  })

  test('should de remover un TODO', () => { 

    const action = {
      type: '[TODO] Remove Todo',
      payload: 1
    }

    const newState = todoReducer( initialState, action );
    expect( newState.length ).toBe(0);

    })

  test('should de realizar el toggle del todo', () => { 

    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1
    }
    
    const newState = todoReducer( initialState, action );
    expect( newState[0].done ).toBe(true);

  })

});