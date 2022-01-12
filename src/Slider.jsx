import React, { useState } from "react";

const Slider = () => {
  const [counter, setCounter] = useState(0);

  const handleText = () => {
    setCounter(10);
  };

  return (
    <>
      <div>
        <h1>{counter}</h1>
      </div>
      <button type="button" onClick={() => setCounter(counter + 2)}>
        +
      </button>
      <button type="button" onClick={handleText}>
        button
      </button>
      <button type="button" onClick={() => setCounter(counter - 1)}>
        -
      </button>
    </>
  );
};

export default Slider;

/*



const Slider = () => {
  const [counter, setCounter] = useState(0);

  const handleText = () => {
    setCounter((count) => {
      return count + 1;
    });
  };

  return (
    <>
      <div>
        <h1>{counter}</h1>
      </div>
      <button type="button" onClick={handleText}>
        button
      </button>
    </>
  );
};



*/
