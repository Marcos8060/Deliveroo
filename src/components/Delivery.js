import React from 'react'
import rider from '../assets/Images/rider.png'
import "animate.css/animate.min.css";

const Delivery = () => {
  return (
    <div className='md:flex md:items-center mx-auto md:p-20 md:mt-0 p-4 md:mt-32 grid'>
        <div>
         <h1 className='md:text-4xl text-4xl md:font-bold mb-4 md:text-left text-center'>Express Home <span className='text-yellow font-semibold'>Delivery</span>.</h1>
         <p className='font-normal md:text-left text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis obcaecati reprehenderit repellat saepe est quibusdam, nemo laboriosam cumque quo vitae!</p>
         <div className="flex items-center justify-center mt-4">
           <button className='hidden md:block bg-yellow p-3'>Read More</button>
         </div>
        </div>
           <img className='object-fit w-8/12 mx-auto' src={rider} alt="" />
    </div>
  )
}

export default Delivery