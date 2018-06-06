import React, { Component } from 'react'
import data from '../data/data'

class CountrySelector extends Component {
  constructor (props) {
    super(props)
    this.state = {country: '',
      sendCountry: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({country: event.target.value})
    this.props.sendCountry(event.target.value)
  }

  handleFocus (event) {
    this.setState({value: ''})
  }

  getCountries () {
    let innerHtml = ''
    let dataArray = Object.values(data)[0]
    for (let i = 0; i < dataArray.length; i++) {
      innerHtml += `<option>${dataArray[i].country}</option>`
    }
    return innerHtml
  }

  render () {
    return (
      <div>
        <label htmlFor='selectCountries'> Select a country</label>
        <input list='countries' id='selectCountries' name='countries' value={this.state.value} onChange={this.handleChange} onFocus={this.handleFocus.bind(this)} />
        <datalist id='countries' dangerouslySetInnerHTML={{ __html: this.getCountries() }} />
      </div>
    )
  }
}

export default CountrySelector
