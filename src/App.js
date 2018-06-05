import React, { Component } from 'react'
import WineGlass from './components/wine_glass'
import BeerGlass from './components/beer_glass'
import LiquorBottle from './components/liquor_bottle'
import CountrySelector from './components/country_selector'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {country: ''}
  }
  getCountry (val) {
    this.setState({country: val})
  }
  render () {
    return (
      <div>
        <div>
          <CountrySelector sendCountry={this.getCountry.bind(this)} />
        </div>
        <div className='wrap'>
          <h3> Wine Servings </h3>
          <WineGlass />
          <h3> Beer Servings </h3>
          <BeerGlass />
          <h3> Spirit Servings </h3>
          <LiquorBottle />
        </div>
      </div>
    )
  }
}

export default App
