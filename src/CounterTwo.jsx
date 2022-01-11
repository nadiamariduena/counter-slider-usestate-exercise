import React, { useState } from "react";
const img2 =
  "https://images.pexels.com/photos/8422536/pexels-photo-8422536.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

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
        <h1>Counter Day</h1>
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
