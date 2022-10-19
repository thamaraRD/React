import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('pruebas en <FirstApp />', () => { 

  test('should hacer match con el snapshot', () => { 

    // const title = 'Hola soy Thamara';

    // const { container } = render( <FirstApp title={ title } /> );

    // expect( container ).toMatchSnapshot();

  });

  test('should mostrar el title en h1', () => { 

    const title = 'Hola soy Thamara';

    const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );

    expect( getByText(title) ).toBeTruthy();

    //Test rigido para evaluar en este caso h1, las pruebas deben ser en su mayoria flexibles
    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);

    expect(getByTestId('test-title').innerHTML).toContain(title);

  });

  test('should mostrar el subtitulo enviado por props', () => { 

    const title = 'Hola soy Thamara';
    const subTitle = 'Go';
    const { getAllByText } = render(
      < FirstApp title={title} subTitle={subTitle} />
    );

    expect(getAllByText(subTitle)).toBeTruthy();

   });

});