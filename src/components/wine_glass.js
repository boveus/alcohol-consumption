import React, { Component } from 'react'

class WineGlass extends Component {
  render () {
    // Max fill is France with 370
    return (
      <div className='wine-glass'>
        <div className='glass' />
        <div className='stem' />
        <div className='base' />
      </div>
    )
  }
}

export default WineGlass
