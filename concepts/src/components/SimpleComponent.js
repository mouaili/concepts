import React, { Component } from 'react';

export class SimpleComponent extends Component {
  render() {
    console.log(
      '%c render() du composant enfant simple',
      'color: rgba(0, 0, 255, 0.917); font-size: 15px; font-weight: bold'
    );
    return (
      <div>
        <p>
          <span className="blue">SimpleComponent : </span>
          {this.props.name}
        </p>
      </div>
    );
  }
}

export default SimpleComponent;
