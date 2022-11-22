import { screen, render } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe('test on <GifItem />', () => { 

    const title = 'Rugrats';
    const url = 'https://rugrats.com/carlitos.jpg'

    test('should match to Snapshot', () => { 

        const { container } = render ( <GifItem title={ title } url={ url } /> );
        expect ( container ).toMatchSnapshot();
    });

    test('should show the URL and the indicated ALT', () => { 
        render ( <GifItem title={ title } url={ url } /> );

        // expect (screen.getByRole('img').src).toBe(url);
        // expect (screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole('img');
        expect (src).toBe(url);
        expect (alt).toBe(title);
        
    });

    test('should show {title} in the component', () => { 

        render ( <GifItem title={ title } url={ url } /> );
        expect ( screen.getByText(title) ).toBeTruthy();
    });

});