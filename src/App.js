import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// let jsonData = require('../public/conversations.json');
// import './ConversationCount.js';
import ConversationCountArray from './ConversationCount.js';
let moment = require('moment');
moment().format();

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { conversationCount: ConversationCountArray };}
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Front Frontend Coding Challenge</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
