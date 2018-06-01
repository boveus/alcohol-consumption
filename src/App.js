import React, { Component } from 'react'
import logo from './logo.svg'
import WineGlass from './components/wine_glass'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          <div class='wrap'>
            <h3> Wine Glass </h3>
            <WineGlass />
            <h3> Beer Glass </h3>
            <div class='beerglass' />
            <div class='handle' />
            <span class='beer' />
            <h3> Liquor Bottle </h3>
            <div class='neck' />
            <div class='bottle' />
            <div class='spirit' />
          </div>
        </p>
      </div>
    )
  }
}

export default App
