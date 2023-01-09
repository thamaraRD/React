import { useCallback, useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFunction = useCallback(
      () => {
        setCounter( value => value +1 );
      },
      [],
    )
    

    // const incrementFunction = () => {
    //     setCounter( counter + 1 );
    // } 

  return (
    <div>
        <h1>useCallback Hook: {counter}</h1>
        <hr />
        <ShowIncrement increment={incrementFunction} />
    </div>
  )
}
