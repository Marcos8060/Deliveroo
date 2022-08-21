import React from 'react'
import burger from '../assets/Images/hero.png'


const Hero = () => {

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1>We make the double Cheesy Burger</h1>
        </div>
        <div>
          <img src={burger} alt="burger"/>
        </div>
      </div>
    </>
  )
}

export default Hero

