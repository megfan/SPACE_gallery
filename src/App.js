import React, { Component } from 'react';
import Header from './components/Header'
import Container from './components/Container';
import './css/App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Container />
      </div>
    )
  }
}

export default App;
