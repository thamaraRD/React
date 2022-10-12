import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleCount = () => {
    setCounter(counter + 1);
  };
  const handleSubtract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleCount}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
