import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe('Test on < AddCategory />', () => { 

    test('should change the value of input', () => { 

        render( < AddCategory onNewValue={ () => {} } /> );

        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'rugrats' } } );

        expect( input.value ).toBe('rugrats');
    });

    test('should call onNewValue if the input has a value', () => { 
        const inputValue = 'Rugrats';
        const onNewValue = jest.fn();

        render( < AddCategory onNewValue={ onNewValue } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect( onNewValue ).toHaveBeenCalled();
        expect( onNewValue ).toHaveBeenCalledTimes(1);
        expect( onNewValue ).toHaveBeenCalledWith( inputValue );
    });

    test('should not call onNewValue if the input is empty', () => { 
        const onNewValue = jest.fn();

        render( < AddCategory onNewValue={ onNewValue } /> );

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect( onNewValue ).toHaveBeenCalledTimes(0);
        
    });

});