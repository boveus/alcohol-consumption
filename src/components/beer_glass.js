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
    let height = 170 * this.state.fill
    return [height, topPadding]
  }
  // componentDidUpdate (previousProps, previousState) {
  //   let pcg = this.state.fill / 376
  //   if (previousProps.data !== this.props.data) {
  //     console.log('hit it')
  //     this.setState({height: `${170 * pcg}px`})
  //     this.setState({paddingTop: `${(170 * pcg) + 30}px`})
  //   }
  // }

  render () {
    return (
      <div className='beer-glass'>
        <div className='beerglass' style={{height: `${(170 * (this.state.fill / 376))}px`}} />
        <div className='handle' />
        <span className='beer' style={{topPadding: `${(170 * (this.state.fill / 376) + 30)}px`}} />
      </div>
    )
  }
}

export default BeerGlass
