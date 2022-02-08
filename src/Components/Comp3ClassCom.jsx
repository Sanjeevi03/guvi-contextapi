import React from "react";
import { Context } from "./Context";
class Comp3 extends React.Component {
  static contextType = Context;
  render() {
    return (
      <>
        <h4>Component 3</h4>
        <h3>Count: {this.context.count}</h3>
        <button onClick={this.context.handleIncrement}> Increment </button>{" "}
        &nbsp;
        <button onClick={this.context.handleDecrement}> Decrement </button>{" "}
        <button onClick={this.context.handleReset}>Reset</button>
        &nbsp;
      </>
    );
  }
}

export default Comp3;
