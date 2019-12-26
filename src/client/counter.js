import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: props.num,
    }
  }
  multiplyME = () => {
    // update state after multiply
  };

  render(){
    return(
      <div>
        <h1>Counter shoot</h1>
        <p><b>Count:</b> {this.state.num}</p>
        <button onClick={this.multiplyME}>Multiply</button>
      </div>
    )
  }
}

export default Counter;