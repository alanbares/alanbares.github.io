import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav';
import Profile from './components/profile'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Profile />
      </div>

    );
  }
}

export default App;
