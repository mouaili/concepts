import React, { Component } from 'react';
import SimpleComponent from './SimpleComponent';
import PureComp from './PureComponent';
import FunctionComp from './functions/FunctionComp';

export class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'SpiderMan',
    };
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('shouldComponentupdate() décide FALSE');
    // console.log(this.state);
    // console.log(nextState);
    // if (this.state.name !== nextState.name) {
    //   return true;
    // }
    return true;
  };

  changeToBatman = () => {
    this.setState({ name: 'BatMan' });
  };

  render() {
    console.log(
      '%c RENDER() du composant Parent',
      'color: rgba(255, 0, 0, 0.917);; font-size: 15px; font-weight: bold'
    );

    return (
      <div>
        <p>
          <span className="red"> ParentComponent : </span> {this.state.name}
        </p>
        <SimpleComponent name={this.state.name} />
        <PureComp name={this.state.name} />
        <FunctionComp name={this.state.name} />
        <button onClick={this.changeToBatman}>Change to BatMan</button>
      </div>
    );
  }
}

export default ParentComponent;
