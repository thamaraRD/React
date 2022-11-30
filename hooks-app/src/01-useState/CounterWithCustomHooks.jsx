import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHooks = () => {

    const { counter } = useCounter();

  return (
    <div className="container">
    <h1>Counter With CustomHook: { counter } </h1>
    <hr />
    <button className="btn bg-primary">+1</button>
    <button className="btn bg-danger">Reset</button>
    <button className="btn bg-primary">-1</button>
    </div>
  )
};