import React from 'react';

export default class ErrorBar extends React.Component {
  render() {
    if (this.props.message) {
      return (
        <div className="alert alert-danger" role="alert">
          {this.props.message}
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
};
