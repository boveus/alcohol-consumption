import React, { Component } from 'react'
import WineGlass from './components/wine_glass'
import BeerGlass from './components/beer_glass'
import LiquorBottle from './components/liquor_bottle'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='wrap'>
        <h3> Wine Glass </h3>
        <WineGlass />
        <h3> Beer Glass </h3>
        <BeerGlass />
        <h3> Liquor Bottle </h3>
        <LiquorBottle />
      </div>
    )
  }
}

export default App
