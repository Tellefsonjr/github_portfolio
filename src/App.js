import React, { Component } from 'react';
import { Root } from "./components/Root";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Spacer } from "./components/Spacer";
import { Contact } from "./components/Contact";

//import logo from './logo.svg';
import './stylesheets/App.css';

class App extends Component {
  constructor(props){    // Optional, declare a class field
        super(props)
  }

  render() {
    return (
      <Root>
        <About refProp={ this.myRef }/>
        <Projects />
        <Spacer />
        <Contact />
      </Root>
    );
  }
}

export default App;
