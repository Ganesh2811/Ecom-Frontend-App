import React, { Component } from 'react'
import Image from './Image'
import ErrorBoundary from './Errorboundary'

export default class Class7 extends Component {
  render() {
    return (
      <div className='container'>
        <h1> ErrorBoundary xample</h1>
        <hr />
        <div className='row'>
            <div className='col-md-4'>
                <ErrorBoundary>
                <Image path="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/q/j/r/s-pk19sh1095g-surhi-original-imah7m6dapcb4tnz.jpeg?q=70" />
                </ErrorBoundary>
            </div>
            <div className='col-md-4'>
            <ErrorBoundary>
            <Image path="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/a/o/h/xxl-box01-jackbella-original-imah8nrbtup5pdab.jpeg?q=70" />
            </ErrorBoundary>

            </div>
            <div className='col-md-4'>
            <ErrorBoundary><Image  path=""/></ErrorBoundary>

            </div>
        </div>
      </div>
    )
  }
}
