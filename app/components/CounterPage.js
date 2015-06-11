import React from 'react';
import Counter from './Counter';
import IncrementButton from './IncrementButton';
import fetchCount from '../fetchers/CountFetcher';
import CountStore from '../stores/CountStore';

export default class CounterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = CountStore.getState();
  }

  handleIncrement() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <h2>Counter Page</h2>
        <Counter count={this.state.count} />
        <IncrementButton onIncrement={this.handleIncrement.bind(this) } />
      </div>
    );
  }
};
