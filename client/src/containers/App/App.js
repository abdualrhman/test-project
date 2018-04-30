import React, { Component } from 'react';
import logo from './logo.svg';
import './../../styles/App.css';
import Hello from '../hello/hello.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello/>
      </div>
    );
  }
}

export default App;
