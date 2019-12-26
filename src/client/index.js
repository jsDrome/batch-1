import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './counter';

class App extends Component {
  render() {
    return (
      <div>
        <h1>JS Drome batch 1</h1>
        <Counter num={5} />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));