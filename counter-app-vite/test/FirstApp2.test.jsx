import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("pruebas en <FirstApp />", () => {
  const title = "Hola soy Thamara";
  const subTitle = 'Go'

  test("should hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('should mostrar el mensaje "Hola soy Thamara"', () => {
    render(<FirstApp title={title} />);
    // screen.debug();
    expect(screen.getAllByText(title)).toBeTruthy();
  });

  test("should mostrar el titulo en h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', { level:1 }).innerHTML).toContain(title);
  });

  test('should mostrar el subtitulo enviado por props', () => { 

    render(<FirstApp title={title} subTitle={subTitle} />);
    expect(screen.getAllByText(subTitle).length).toBe(2);

   })

});
