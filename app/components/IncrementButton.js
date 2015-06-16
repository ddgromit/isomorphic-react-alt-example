import React from 'react';

export default class IncrementButton extends React.Component {
  render() {
    return (
      <button onClick={this.handleOnClick.bind(this)}>Click To Increment</button>
    );
  }

  handleOnClick() {
    this.props.onIncrement();
  }
}

IncrementButton.propTypes = {
  onIncrement: React.PropTypes.func.isRequired
};
