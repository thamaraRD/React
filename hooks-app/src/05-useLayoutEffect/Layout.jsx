
import { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter'

export const Layout = () => {

  const { counter, increment } = useCounter();

  const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);
  const { quote, author } = !!data && data[0];

  const parrafoRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0});

  useLayoutEffect(() => {
   
    const { height, width } = parrafoRef.current.getBoundingClientRect() ;
    setBoxSize({ height, width });
  }, []);

return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

    {
      isLoading ? 
      (
    <div className='alert alert-warning text-center'>
      Loading...
    </div>
      )  
      :
      (
    <blockquote
    className='blockquote text-end'
    style={{ display: 'flex' }}
    >
    <p ref={parrafoRef}>{ quote }</p>
    <footer>- { author }</footer>
    </blockquote>
      )
    }
    <code>{JSON.stringify(boxSize)}</code>
    <button
    disabled={isLoading}
    onClick={increment} 
    className='btn btn-primary'>Next Qoute
    </button>
    </> 
    )};
