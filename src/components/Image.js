import React, { Component } from 'react'

export default class Image extends Component {

    
  render() {
    // console.log(this.props.path);
    if(this.props.path == ""){
        throw new Error("Image Path Required");
    }
    return (
      <div>
        <img src={this.props.path} className='img-responsive' />
      </div>
    )
  }
}
