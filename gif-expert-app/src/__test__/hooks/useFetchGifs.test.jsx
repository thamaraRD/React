import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('test on hook useFetchGifs,js', () => { 

    test('should return initial state', () => {

        const {result} =  renderHook( () => useFetchGifs('Rugrats') );
        const { images, loader } = result.current;
        
        expect(images.length).toBe(0);
        expect(loader).toBeTruthy();
    });

    test('should return array of images and Loader set to false', async() => { 

        const {result} =  renderHook( () => useFetchGifs('Rugrats') );

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, loader } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(loader).toBeFalsy();
    });
    });