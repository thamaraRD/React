import { render,screen } from "@testing-library/react";
import { GifExpertApp } from "../../components/GifExpertApp";

describe('test on <GifExpertApp/>', () => { 

    test('should show h1 title', () => {
        const title = 'GifExpertApp';
        render (< GifExpertApp title={title} />);

        expect(title).toBeTruthy();

    });

 });