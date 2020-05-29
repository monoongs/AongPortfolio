import React, { Component } from 'react'

class Intro extends Component {
  componentDidMount() {
    console.log('Mount => Intro')
  }
  render() {
    return(
      <div className="bg-black flex justify-center items-center min-h-screen text-white">
        Intro
      </div>
    )
  }
}

export default Intro
