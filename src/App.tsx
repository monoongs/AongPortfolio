import React, { Component } from 'react';
import "./styles/tailwind/main.css";
import './App.css';
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

class App extends Component {
  render() {
    return(
      <>
        <Intro />
        <AboutMe />
        <Skills />
      </>
    )
  }
}

export default App;
