import React, { Component } from 'react'
import WineGlass from './components/wine_glass'
import BeerGlass from './components/beer_glass'
import LiquorBottle from './components/liquor_bottle'
import CountrySelector from './components/country_selector'
import data from './data/data'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {country: '',
      beer_servings: 0,
      wine_servings: 0,
      spirit_servings: 0}
  }
  getCountry (val) {
    this.setState({country: val})
    this.setCountryData(val)
  }

  setCountryData (country) {
    let dataArray = Object.values(data)[0]
    for (let i = 0; i < dataArray.length; i++) {
      if (dataArray[i].country === country) {
        this.setState({beer_servings: dataArray[i].beer_servings,
          wine_servings: dataArray[i].wine_servings,
          spirit_servings: dataArray[i].spirit_servings})
      }
    }
  }
  render () {
    return (
      <div>
        <h3> {this.state.country} </h3>
        <div>
          <CountrySelector sendCountry={this.getCountry.bind(this)} />
        </div>
        <div className='wrap'>
          <h3> Wine Servings </h3>
          <WineGlass />
          <h3> Beer Servings </h3>
          <BeerGlass fill={this.state.beer_servings} />
          <h3> Spirit Servings </h3>
          <LiquorBottle />
        </div>
      </div>
    )
  }
}

export default App
