import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Container from './components/Container'
import './css/App.scss'

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Container />
      </div>
    )
  }
}

export default App;