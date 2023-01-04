import React from 'react'
import { useFetch } from '../hooks/useFetch';

export const MultipleCustoomHook = () => {

  const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes');
  console.log( { data, isLoading, hasError } );
  

return (
    <div>
        <h1>BreakingBad Quotes</h1>
        <hr />
    </div> 
    )};
