import React, { Component } from 'react'
import Hoc from '../utilities/Hoc';

class Comp3 extends Component {

   
  render() {
    console.log(this.props);
    
    return (
      <div className='container'>
        <h1>HOC</h1>
      </div>
    )
  }
}

export default Hoc(Comp3,"/category");