import React from 'react';

export default class Counter extends React.Component {
  render() {
    return (
      <div>
        Count:
        <span>{this.props.count}</span>
      </div>
    );
  }
}

Counter.propTypes = {
  count: React.PropTypes.number
};
