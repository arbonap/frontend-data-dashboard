import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let jsonData = require('../public/conversations.json');
import JSONPretty from 'react-json-pretty';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {response: JSON.stringify(jsonData)};
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <JSONPretty id="json-pretty" json={ this.state.response }></JSONPretty>
      </div>
    );
  }
}

export default App;
