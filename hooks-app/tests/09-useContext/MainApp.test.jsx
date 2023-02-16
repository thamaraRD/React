import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp"
import { Navbar } from "../../src/09-useContext/Navbar";

describe('testing en el componente <MainApp />', () => { 

  test('should de mostrar el HomePage', () => { 

    render(
  <MemoryRouter>
    <MainApp/>
  </MemoryRouter>
    )

    expect(screen.getByText('HomePage de')).toBeTruthy();
    

 });
  test('should de mostrar el LoginPage', () => { 

    render(
  <MemoryRouter initialEntries={['/login']}>
    <MainApp/>
  </MemoryRouter>
    )

    expect(screen.getByText('LoginPage')).toBeTruthy();


 });

 test('should match to snapshot navBar', () => { 

  const { container } = render(
  <MemoryRouter>
    <Navbar />
  </MemoryRouter>
  );
  expect(container).toMatchSnapshot();

  });

})