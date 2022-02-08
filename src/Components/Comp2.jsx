import React, { useContext } from "react";
import Comp3 from "./Comp3";
import { Context } from "./Context";

function Comp2() {
  const { count, handleIncrement, handleDecrement, handleReset } =
    useContext(Context);
  return (
    <>
      <h3>Component 2 </h3>
      <Context.Consumer>
        {() => {
          return (
            <>
              <h4>Count : {count}</h4>
              <button onClick={handleIncrement}>Increment</button> &nbsp;
              <button onClick={handleDecrement}>Decrement</button> &nbsp;
              <button onClick={handleReset}>Reset</button>
              <Comp3 />
            </>
          );
        }}
      </Context.Consumer>
    </>
  );
}

export default Comp2;
