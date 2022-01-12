import "./App.css";
import React from "react";
import Counter from "./Counter";
import CounterTwo from "./CounterTwo";
import ChangeImg from "./changeImg";
import Slider from "./Slider";

function App() {
  return (
    <>
      <div className="App">
        {" "}
        <ChangeImg />
        <Counter />
        <CounterTwo />
        <Slider />
      </div>
    </>
  );
}

export default App;
