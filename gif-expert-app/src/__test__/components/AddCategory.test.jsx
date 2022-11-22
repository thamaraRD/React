import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe('Test on < AddCategory />', () => { 

    test('should change the value of input', () => { 

        render( < AddCategory onNewValue={ () => {} } /> );

        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'rugrats' } } );

        expect( input.value ).toBe('rugrats');
    });

});