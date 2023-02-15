import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('pruebas en el useForm', () => { 

  const initialForm = {
    name: 'Thamara',
    email: 'kdfefe@roro.com'
  }

  test('should regresar los valores por defecto', () => { 

    const { result } = renderHook( () => useForm(initialForm) );
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      onInputChange: expect.any( Function ),
      onResetForm: expect.any( Function )
    })
  })

  test('should de cambiar el nombre del form', () => { 
    const newValueName = 'Jesus'
    const { result } = renderHook( () => useForm( initialForm ));
    const { onInputChange } = (result.current);

    act(() => {
      onInputChange({ target: { id: 'name' , value: newValueName } });
    })

    expect(result.current.name).toBe( newValueName );

  });

  test('should de realizar el reset del form', () => { 
    const newValueName = 'Jesus'
    const { result } = renderHook( () => useForm( initialForm ));
    const { onInputChange, onResetForm } = (result.current);
    act(() => {
      onInputChange({ target: { id: 'name' , value: newValueName } });
      onResetForm();
    })

    expect(result.current.name).toBe( initialForm.name );

  });

});