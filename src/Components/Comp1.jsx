import React, { useContext } from "react";
import { Context } from "./Context";

function Comp1() {
  const {count,handleIncrement,handleDecrement,handleReset} = useContext(Context)

  return (
    <div>
      <h3>Component 1 </h3>
      <h4>Count : {count}</h4>
      <button onClick={handleIncrement}>Increment</button> &nbsp;
      <button onClick={handleDecrement}>Decrement</button> &nbsp;
      <button onClick={handleReset}>Reset</button> &nbsp;
    </div>
  );
}  

export default Comp1;