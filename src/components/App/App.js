import React, { Component } from 'react';
import Header from "../Header/Header"
import Content from "../Content/Content"
// import ReactGA from 'react-ga';

import './App.css'

class App extends Component {
  render() {
    // ReactGA.initialize('UA-54875525-1');
    return (
      <div className="App">
       <Header/>
       <Content/>
      </div>
    );
  }
}

export default App;
