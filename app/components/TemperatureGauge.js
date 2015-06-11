import React from 'react';

export default class TemperatureGauge extends React.Component {
  render() {
    return (
      <div>
        Todays Temperature is <span>{this.props.temp}</span> degrees.
      </div>
    );
  }
};
