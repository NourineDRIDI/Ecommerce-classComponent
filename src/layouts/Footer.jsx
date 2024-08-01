import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center align-items-center bg-danger text-light w-100 position-fixed bottom-0'>
        <p className='text-center p-2 fs-6 mt-3'>copy rights reserved by <span className='fw-bold bg-light text-dark rounded p-1'>NouirneDRIDI</span></p>
      </div>
    )
  }
}
