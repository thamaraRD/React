import { useState } from "react";

export const CounterApp = () => {
  const [counters, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  });

  const { counter1, counter2, counter3 } = counters;

  return (
    <div className="container">
      <h1>Counter1: {counter1} </h1>
      <h1>Counter2: {counter2} </h1>
      <h1>Counter3: {counter3} </h1>
      <hr />
      <button className="btn bg-danger" onClick={() => setCounter({...counters, counter1: counter1 + 1})}>
        +1
      </button>
    </div>
  );
};
