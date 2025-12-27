import React, {  PureComponent} from 'react'

export default class Purechild extends PureComponent {
  render() {
    console.log('Purechild called' , Math.random());
    
    return (
      <div>Purechild , {this.props.p1  }</div>
    )
  }
}
