import React, { Component } from 'react'
import Purechild from './Purechild'

export default class Pure extends Component {

    constructor(){
        super();
        this.state = {
            count:0,
            age:20
        }
    }

    myfunc1(){
        this.setState({
            count: this.state.count + 1
        });
    }

    myfunc2(){
        this.setState({
            age: this.state.age + 2
        });
    }

  render() {
    return (
      <div className='container'>
        <h1>Pure Component</h1>

        <p>Age : {  this.state.age }</p>
        <button onClick={()=>{ this.myfunc2() }}>Enter</button>
        <p>Count : {  this.state.count }</p>
        <button onClick={()=>{ this.myfunc1() }}>Enter</button>

        <hr />

        <Purechild p1={this.state.age}/>
      </div>
    )
  }
}
