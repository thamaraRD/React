import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('test in the <CounterApp />', () => { 
  const value = 100;

  test('should hacer match con el snapshot', () => { 

    const { container } = render( <CounterApp value={value} /> );
    
    expect(container).toMatchSnapshot();

  });

  test('should mostrar el valor inicial de 100', () => { 

    render( <CounterApp value={100} /> );

    // expect((value)).toBeTruthy();
    expect(screen.getByText(100)).toBeTruthy();

    });

  test('should incrementar con el boton +1', () => { 

    render( <CounterApp value={value} /> );
    fireEvent.click( screen.getByText('+1') );
    
    expect( screen.getByText('101') ).toBeTruthy();

  });

  test('should decrementar con el boton -1', () => { 

    render( <CounterApp value={value} /> );
    fireEvent.click( screen.getByText('-1') );
    
    expect( screen.getByText('99') ).toBeTruthy();

  });

  test('should funcionar el boton de Reset', () => { 

    render( <CounterApp value={value} /> );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    // fireEvent.click( screen.getByText('reset') );
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    
    expect( screen.getByText(value) ).toBeTruthy();

  });

});