import React from 'react';

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1
    }
  }

  handleOnClick() {
    console.log('click');
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick.bind(this)}>Click Me</button>
        <div>
          Count:
          <span>{this.state.count}</span>
        </div>
      </div>
    );
  }
};
