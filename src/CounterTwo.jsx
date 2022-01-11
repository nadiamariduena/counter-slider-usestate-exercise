import React, { useState } from "react";
const img2 =
  "https://images.unsplash.com/photo-1612201143788-b15844da6606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const CounterTwo = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <div
        className="counter"
        style={{
          backgroundImage: `url(${img2})`,
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1>Counter</h1>
        <h2>{value}</h2>
        <button
          className="btn-card-book"
          type="button"
          onClick={() => setValue(value + 1)}
        >
          +
        </button>
        <button
          className="btn-card-book"
          type="button"
          onClick={() => setValue(0)}
        >
          reset
        </button>
        <button
          className="btn-card-book"
          type="button"
          onClick={() => setValue(value - 1)}
        >
          -
        </button>
      </div>
    </>
  );
};

export default CounterTwo;
