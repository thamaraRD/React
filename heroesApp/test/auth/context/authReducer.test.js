import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en el authReducer', () => { 
  
test('should de retonar el estado por defecto', () => { 
  
  const state = authReducer({ logged: false }, {});
  expect( state ).toEqual({logged: false})

})

test('should de login llamar al login autenticar y establecer el usuario', () => { 

  const action = {
    type: types.login,
    payload: {
      name: 'Juan',
      id: '123'
    }
  }

  const state = authReducer({ logged: false }, action);
  expect( state ).toEqual({
    logged: true,
    user: action.payload
  })

})

test('should de logout borrar el nombre del usuario y establecer logged en false', () => {

  const state = {
    logged: true,
    user: {
      name: 'Juan',
      id: '123'
    }
    }

  const action = {
    type: types.logout
  }

  const newState = authReducer( state,action );
  expect(newState).toEqual({logged: false})

  })

})
