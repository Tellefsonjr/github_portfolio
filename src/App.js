import React, { Component } from 'react';
import {Root} from "./components/Root";
import {Home} from "./components/Home";
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Root>
        <Home />
      </Root>
    );
  }
}

export default App;
