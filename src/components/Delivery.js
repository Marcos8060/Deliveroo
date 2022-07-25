import React from 'react'
import rider from '../assets/Images/rider.png'

const Delivery = () => {
  return (
    <div className='flex items-center mx-auto'>
        <div>
         <h1 className='text-7xl font-bold'>Express Home <span className='text-yellow'>Delivery</span>.</h1>
         <p className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis obcaecati reprehenderit repellat saepe est quibusdam, nemo laboriosam cumque quo vitae!</p>
        </div>
        <img className='object-fit w-7/12 mx-auto' src={rider} alt="" />
    </div>
  )
}

export default Delivery