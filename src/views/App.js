import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../custom-css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
        </div>
        <p className="App-intro">
          I'm working on this to play around with around with react, finch, and
          some different types of react component stylings. The repo is at <br />
          <a href="https://github.com/nimaeskandary/personal-react">
            https://github.com/nimaeskandary/personal-react
          </a>
        </p>
      </div>
    );
  }
}

export default App;
