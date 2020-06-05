import React, { Component } from 'react';
import axios from 'axios'
import "./styles/tailwind/main.css";
import './App.css';
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

type MyState = { data: string };

class App extends React.Component<MyState> { 

  constructor(props : any) {
    super(props)
    this.state = { data : "" }
  }

  componentDidMount() {
    axios.get('./data/data.json').then(res => {
      // console.log(res.data)
      { this.setState({ data : res.data.data}) }
    })
  }

  render() {
    return(
      <>
        {console.log(this.state.data)}
        <Intro />
        <AboutMe />
        <Skills />
      </>
    )
  }
}

export default App;
