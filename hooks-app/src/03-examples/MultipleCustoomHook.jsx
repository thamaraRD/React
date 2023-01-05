import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter'

export const MultipleCustoomHook = () => {

  const { counter, increment } = useCounter();

  const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);
  const { quote, author } = !!data && data[0];

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
    <blockquote className='blockquote text-end'>
    <p>{ quote }</p>
    <footer>- { author }</footer>
    </blockquote>
      )
    }
    <button
    disabled={isLoading}
    onClick={increment} 
    className='btn btn-primary'>Next Qoute
    </button>
    </> 
    )};
