import { string } from "prop-types";
import { getGifApi } from "../../helpers/getGifApi";

describe('Test on getGifApi.js', () => { 

    test('should return array of gifs ', async () => { 

        const gifs = await getGifApi ('rugrats');
        expect( gifs.length ).toBeGreaterThanOrEqual(10);
        expect( gifs[0]).toEqual({
        id: expect.any(String), 
        title: expect.any(String),
        url: expect.any(String)
        });
    });

    });