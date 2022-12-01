import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHooks = () => {

    const { counter, increment, decrement, reset } = useCounter();

  return (
    <div className="container">
    <h1>Counter With CustomHook: { counter } </h1>
    <hr />
    <button className="btn bg-primary" onClick={ increment }>+1</button>
    <button className="btn bg-danger"  onClick={ reset }>Reset</button>
    <button className="btn bg-primary" onClick={ decrement }>-1</button>
    </div>
  )
};