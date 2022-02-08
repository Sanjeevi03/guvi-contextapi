import { useState } from "react";
import "./App.css";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import { Context } from "./Components/Context";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <h3>App Component </h3>
      <h4>Count : {count}</h4>
      <button onClick={handleIncrement}>Increment</button> &nbsp;
      <button onClick={handleDecrement}>Decrement</button> &nbsp;
      <button onClick={handleReset}>Reset</button> &nbsp;
      <Context.Provider
        value={{ count, handleIncrement, handleDecrement, handleReset }}
      >
        <Comp1 />
        <Comp2 />
      </Context.Provider>
    </>
  );
}

export default App;
