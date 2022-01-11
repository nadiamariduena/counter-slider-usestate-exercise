import React, { useState } from "react";

const img1 =
  "https://images.unsplash.com/photo-1592284441672-6393fd6dd564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

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
      <div
        className="counter"
        style={{
          backgroundImage: `url(${img1})`,
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <button className="btn-card-book" type="button" onClick={btn}>
          button increase
        </button>
      </div>
    </>
  );
};

export default Counter;
