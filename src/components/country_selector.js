import React, { Component } from 'react'
import data from '../data/data'

class CountrySelector extends Component {
  constructor (props) {
    super(props)
    this.state = {country: '',
      sendCountry: '',
      value: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({country: event.target.value})
    this.props.sendCountry(event.target.value)
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
        <select id='countries' dangerouslySetInnerHTML={{ __html: this.getCountries() }} onChange={this.handleChange} />
      </div>
    )
  }
}

export default CountrySelector
