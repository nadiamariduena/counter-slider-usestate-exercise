import React, { useState } from "react";

const img1 =
  "https://images.pexels.com/photos/8422529/pexels-photo-8422529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

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
        <h1>Counter Great Days</h1>
        <h2>{counter}</h2>
        <button className="btn-card-book" type="button" onClick={btn}>
          button increase
        </button>
      </div>
    </>
  );
};

export default Counter;
