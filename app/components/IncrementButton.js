import React from 'react';

export default class IncrementButton extends React.Component {
  handleOnClick() {
    this.props.onIncrement();
  }

  render() {
    return (
      <button onClick={this.handleOnClick.bind(this)}>Click To Increment</button>
    );
  }
};
