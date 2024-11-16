import React, { PureComponent } from 'react';

export class PureComp extends PureComponent {
  render() {
    console.log(
      '%c render() PURECOMPONENT enfant simple',
      ' color: rgba(0, 153, 5, 0.917);; font-size: 15px; font-weight: bold'
    );
    return (
      <div>
        <p>
          <span className="green">PureComponent : </span>
          {this.props.name}
        </p>
      </div>
    );
  }
}

export default PureComp;
