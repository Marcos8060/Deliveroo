import React from 'react'
import burger from '../assets/Images/hero.png'

const Hero = () => {
  return (
    <>
      <div className="flex items-center w-11/12 mx-auto">
        <div>
          <h1 className='font-bold'>We make the double Cheesy Burger</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore cumque temporibus iste sit ut vitae deleniti accusamus fugit odit odio quisquam molestias quis, expedita fuga assumenda. Animi nisi tenetur architecto.</p>
        </div>
        <div>
          <img src={burger} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero

