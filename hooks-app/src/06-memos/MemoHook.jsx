import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = ( iterationNumber = 100 ) =>{
  for (let i = 0; i < iterationNumber; i++) {
    console.log('prueba');
  }
  return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {
  
    const { counter, increment } = useCounter(4000);
    const [ show, setShow ] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <div>
        <h1>Counter: <small>{ counter }</small></h1>
        <hr />
        <h4>{ memorizedValue }</h4>
        <button
        className="btn btn-success"
        onClick={ () => increment () }
        >+1
        </button>
        <button
        className="btn btn-outline-success"
        onClick={ () => setShow( !show ) }
        >
          Show/Hidden { JSON.stringify(show) }
        </button>
    </div>
  )
}
