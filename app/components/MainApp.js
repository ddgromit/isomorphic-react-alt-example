import React from 'react';
import Counter from './Counter';
import IncrementButton from './IncrementButton';

export default class MainApp extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1
    }
  }

  componentWillMount() {
    this.setState({
      count: this.props.initialCount
    });
  }

  handleIncrement() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <Counter count={this.state.count} />
        <IncrementButton onIncrement={this.handleIncrement.bind(this) } />
      </div>
    );
  }
};
