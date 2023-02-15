import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustoomHook } from "../../src/03-examples/MultipleCustoomHook";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('haciendo testing en el componente <MultipleCustoomHook />', () => { 
  
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
   counter: 1,
   increment: mockIncrement
  });

  //Asegurar que cada una de las pruebas a funciones queden
  //reseteadas a su stado inicial
  beforeEach(() => {
    jest.clearAllMocks();
  })

  test('should de mostrar el componente por defecto', () => { 

    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    })

    render( <MultipleCustoomHook /> );

    expect( screen.getByText('Loading...') );
    expect( screen.getByText('BreakingBad Quotes'))
    const nextQouteButton = (screen.getByRole('button', { name: 'Next Qoute' }))
    expect(nextQouteButton.disabled).toBeTruthy();
    // screen.debug();
  })

  test('should match to Snapshot', () => {

    const { container } = render ( <MultipleCustoomHook /> );
    expect(container).toMatchSnapshot();
  })

  test('should de mostrar un Quote', () => { 

    useFetch.mockReturnValue({
      data: [{ author: 'Thamara', quote: 'Go go go' }],
      isLoading: false,
      hasError: null
    })
    render( <MultipleCustoomHook /> )

    expect( screen.getByText('Go go go') ).toBeTruthy();
    expect( screen.getByText('- Thamara') ).toBeTruthy();
    const nextQouteButton = (screen.getByRole('button', { name: 'Next Qoute' }))
    expect(nextQouteButton.disabled).toBeFalsy();
    // screen.debug();
   })

  test('should de llamar la función incrementar', () => { 


    useFetch.mockReturnValue({
      data: [{ author: 'Thamara', quote: 'Go go go' }],
      isLoading: false,
      hasError: null
    })
    render( <MultipleCustoomHook /> )
    const nextQouteButton = (screen.getByRole('button', { name: 'Next Qoute' }));
    fireEvent.click( nextQouteButton );

    expect(mockIncrement).toHaveBeenCalled();

  })

});