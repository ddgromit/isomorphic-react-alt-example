import React from 'react';
import Counter from './Counter';
import IncrementButton from './IncrementButton';
import fetchCount from '../fetchers/CountFetcher';

export default class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount
    }
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
