import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks/useCounter";

describe("pruebas en el useCounter", () => {

  test("should retornar los valores por defecto", () => {

    const { result } = renderHook( () => useCounter() );
    const { counter, increment, decrement, reset } = result.current;

    expect( counter ).toBe(10);
    expect( increment ).toEqual( expect.any( Function ));
    expect( decrement ).toEqual( expect.any( Function ));
    expect( reset ).toEqual( expect.any( Function ));
  
});

  test('should de generar el counter con el valor de 100', () => { 

    const { result } = renderHook( () => useCounter(100) );
    expect( result.current.counter ).toBe(100);

  });

  test('should de incrementar el contador', () => { 

    const { result } = renderHook( () => useCounter() );
    const { increment } = result.current;

    act(() => {
      increment();
    })

    const { counter } = result.current;
    expect( counter ).toBe(11);

  });

  test('should de decrementar el contador', () => { 

    const { result } = renderHook( () => useCounter() );
    const { decrement } = result.current;

    act(() => {
      decrement();
    })
    //Acceder al contador luego de llamar a la función
    const { counter } = result.current;
    expect( counter ).toBe(9);

  });

  test('should de dejar el contador en Reset o en su valor predeterminado', () => { 
    const { result } = renderHook( () => useCounter() );
    const { reset } = result.current;

    act(() => {
      reset();
    })
  
    const { counter } = result.current;
    expect( counter ).toBe(10);

  });
  })

