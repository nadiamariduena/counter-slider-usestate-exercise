import "./App.css";
import React from "react";
import Counter from "./Counter";
import CounterTwo from "./CounterTwo";
import ChangeImg from "./changeImg";

function App() {
  return (
    <>
      <div className="App">
        {" "}
        <ChangeImg />
        <Counter />
        <CounterTwo />
      </div>
    </>
  );
}

export default App;
