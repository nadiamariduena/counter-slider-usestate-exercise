import React, { useState } from "react";

const Counter = () => {
  //
  //
  const [counter, setCounter] = useState(0);
  //
  const btn = () => {
    setCounter((counter) => {
      return counter + 1;
    });
  }; //
  return (
    <>
      <div>
        <h1>counterr</h1>
        <h2>{counter}</h2>
        <button type="button" onClick={btn}>
          button increase
        </button>
      </div>
    </>
  );
};

export default Counter;
