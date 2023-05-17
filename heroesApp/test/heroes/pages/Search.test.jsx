import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Search } from "../../../src/heroes/pages/Search";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate

}));

describe('Pruebas en <Search />', () => { 

  beforeEach(() => jest.clearAllMocks());

  test('should de mostrarse correctamente con valores por defecto', () => { 

    const { container } = render(
      <MemoryRouter>
        <Search/>
      </MemoryRouter>
    )

   expect(container).toMatchSnapshot();

   })

   test('should de mostrar Batman y el input con el valor del queryString y la img ', () => { 

    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Search/>
      </MemoryRouter>
    )
      const input = screen.getByRole('textbox');
      expect( input.value ).toBe('batman');

      const img = screen.getByRole('img');
      expect(img.src).toContain('/assets/heroes/dc-batman.jpg');
  

      // screen.debug();
    })


    test('should de llamar el navigate a la pantalla nueva', () => { 

      render(
        <MemoryRouter initialEntries={['/search']}>
          <Search/>
        </MemoryRouter>
      )

      const input = screen.getByRole('textbox');
      fireEvent.change( input, {target: { name: 'searchText', value: 'superman' }} )

      const form = screen.getByRole('form');
      fireEvent.submit(form);

      expect(mockedUseNavigate).toHaveBeenCalledWith('?q=superman')

     })

  })
