import React, { useState } from "react";
import "./counter.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/state/counter/counterSlice";

const Counter = () => {

  const count =  useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();
  

  return (
    <div>
      <div className="container">
        <div className="header">
          <h3>Counter App Using Redux </h3>
        </div>

        <div className="body">
          <h1> {count} </h1>

          <div className="buttons">
            <button onClick={() => dispatch(increment())} >Increase</button>
            <button onClick={() => dispatch(decrement())} >Decrease</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
