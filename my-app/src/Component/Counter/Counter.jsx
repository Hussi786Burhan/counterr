import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // initial state
    this.state = {
      count: 0,
    };
  }

  // increment method
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // decrement method
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Counter</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.increment} style={{ marginRight: "10px" }}>
          Increment
        </button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
