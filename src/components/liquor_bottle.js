import React, { Component } from 'react'

class LiquorBottle extends Component {
  constructor (props) {
    super(props)
    this.state = {fill: 0}
  }

  // Max fill is Grenada with 438
  render () {
    return (
      <div className='liquor-bottle'>
        <div className='neck' />
        <div className='bottle' style={{height: `${(300 - (300 * (this.props.fill / 480)))}px`}} />
        <div className='spirit' style={{height: `${(300 * (this.props.fill / 480))}px`}} />
      </div>
    )
  }
}

export default LiquorBottle

//
