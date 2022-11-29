import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('test on < GifGrid />', () => { 
    const category = 'Rugrats';
    const className = 'loader';

    useFetchGifs.mockReturnValue({
        images: [],
        loader: true
    });

    test('should show the Loader initially', () => { 
        render( <GifGrid category={category} /> );

        expect(className).toBeTruthy();
        expect(screen.getByText(category));
    });

    test('should mostrar items cuando se cargan las imagenes useFetchGifs', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'Rugrats',
                url: 'https://www.rugrats.com/carlitos.png'
            },
            {
                id: '123',
                title: 'Hola',
                url: 'https://www.rugrats.com/hola.png'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            loader: false
        });
        render( <GifGrid category={category} /> );
       
        expect(screen.getAllByRole('img').length).toBe(2);
    });

});