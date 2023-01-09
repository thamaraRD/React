import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small";

export const Memorize = () => {

    const { counter, increment } = useCounter(10);

  return (
    <div>
        <h1>Counter: <Small value={ counter }/> </h1>
        <hr />
        <button
        className="btn btn-success"
        onClick={ () => increment () }
        >+1
        </button>
    </div>
  )
}
