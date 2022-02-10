import React from "react";
import { Context } from "./Context";
class Comp3 extends React.Component {
  static contextType = Context;
  render() {
    return (
      <>
        <h3>Component 3</h3>
        <h4>Count: {this.context.count}</h4>
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
