import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCounter = () => {
    this.setState(st => ({ count: st.count + 1 }));
  };

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <h1>The count is: {this.state.count}</h1>
        <button onClick={this.incrementCounter}>Add 1</button>
      </div>
    );
  }
}

export default CounterClass;
