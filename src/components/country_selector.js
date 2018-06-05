import React, { Component } from 'react'
import data from '../data/data'

class CountrySelector extends Component {
  constructor (props) {
    super(props)
    this.state = {countries: Object.values(data)[0]}
  }

  render () {
    return (
      <div>
        <label for='selectCountries'> Select a country</label>
        <input list='countries' id='selectCountries' name='countries' />
        <datalist id='countries'>
          <option>{this.state.countries[0].country}</option>
          <option>{this.state.countries[1].country}</option>
        </datalist>
      </div>
    )
  }
}

export default CountrySelector
