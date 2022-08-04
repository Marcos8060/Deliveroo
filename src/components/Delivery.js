import React from 'react'
import rider from '../assets/Images/rider.png'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Delivery = () => {
  return (
    <div className='md:flex md:items-center mx-auto md:p-20 md:mt-0 p-4 mt-48 grid'>
        <div>
         <h1 className='md:text-6xl text-4xl md:font-bold mb-4 md:text-left text-center'>Express Home <span className='text-yellow font-semibold'>Delivery</span>.</h1>
         <p className='font-normal md:text-left text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis obcaecati reprehenderit repellat saepe est quibusdam, nemo laboriosam cumque quo vitae!</p>
        </div>
           <img className='object-fit w-8/12 mx-auto' src={rider} alt="" />
    </div>
  )
}

export default Delivery