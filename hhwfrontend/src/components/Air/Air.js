import React, {Component} from "react";
import Airtype from './Airtype/Airtype';

class Air extends Component {
  render() {
    return (
      <div>
        <Airtype title={'Latex'} key={1} />
        <Airtype title={'Recycled Latex'} key={2} />
        <Airtype title={'Oil Based Paint'} key={3} />
        <Airtype title={'Resins'} key={4} />
        <Airtype title={'Solvents'} key={5} />
      </div>
      
    );
  }
}

export default Air;