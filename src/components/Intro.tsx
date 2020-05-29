import React, { Component } from 'react'

class Intro extends Component {
  componentDidMount() {
    console.log('Mount => Intro')
  }
  render() {
    return(
      // <div className="bg-black flex justify-center items-center min-h-screen text-white">
      <div className="bg-gray-900 min-h-screen">
        <div className="
            flex flex-row bg-gray-900 min-h-screen items-center justify-center mx-auto max-w-screen-xs
            sm:max-w-screen-sm
            lg:max-w-screen-xl
          ">
          <div className="bg-gray-500 w-3/5 text-right">
            <p>Hello</p>
            <p>I'am Web Developer</p>
          </div>
          <div className="bg-gray-400 w-2/5">
            2
          </div>
        </div>

      </div>

    )
  }
}

export default Intro
