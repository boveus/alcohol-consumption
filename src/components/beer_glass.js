import React, { Component } from 'react'

class BeerGlass extends Component {
  constructor (props) {
    super(props)
    this.state = {fill: 0}
  }

  // Namibia is the highest consumption with 376, so 376 is 100%
  computeFill () {
    let pcg = this.state.fill / 376
    let topPadding = (170 * pcg) + 30
    let height = 170 * pcg
    return [height, topPadding]
  }
  setFill () {
    let values = this.computeFill()
    document.getElementsByClassName('beerglass::after').style.height = values[0]
    document.getElementsByClassName('beerglass').style.paddingtop = values[1]
  }

  render () {
    return (
      <div className='beer-glass'>
        <div className='beerglass' id='beer' />
        <div className='handle' />
        <span className='beer' id='beerliquid' />
      </div>
    )
  }
}

export default BeerGlass
