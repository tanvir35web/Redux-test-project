import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleClickPlus() {
    setCount(count + 1);
  }

  function handleClickMinus() {
    setCount(count - 1);
  }
  function handleReset() {
    setCount(0);
  }

  return (
    <div>
      <div className="container">
        <div className="header">
          <h3>Counter App Using Redux </h3>
        </div>

        <div className="body">
          <h1>{count}</h1>

          <div className="buttons">
            <button onClick={handleClickPlus}>Increase</button>
            <button onClick={handleClickMinus}>Decrease</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
