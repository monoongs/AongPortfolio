import React, { Component } from 'react'

class AboutMe extends Component {
  
  render() {
    
    const sign = '</>'

    return(
      <div className="bg-gray-900  min-h-half">
        {/* <p className="text-white text-7r">{ sign }</p> */}
        <div className="
            flex bg-gray-900  min-h-half items-center  justify-center mx-auto max-w-screen-xs
            sm:max-w-screen-sm
            lg:max-w-screen-xl
          ">
          <div className="wrap flex flex-row items-center ">
            <div className="flex text-center justify-center w-24 md:w-64 ">
              <p className="text-white text-base lg:text-6.5r">{'<'}</p>
            </div>
            <div className="flex w-25r justify-center">
              <p className="text-white">Hello ! I'm Nattapon Srivithayarat 25 year-old, I am a Programmer working on creating a website sometime I make frontend sometime I make backend and sometime I making full of the website</p>      
            </div>
            <div className="flex text-center justify-center w-24 md:w-64">
              <p className="text-white text-base lg:text-6.5r">{'>'}</p>
            </div>
          </div>
         
          
        </div>
      </div>
    )
  }
}

export default AboutMe
