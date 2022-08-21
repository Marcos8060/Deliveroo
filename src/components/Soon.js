import React from 'react'
import burger from '../assets/Images/burger7.png'
import "animate.css/animate.min.css";

const Soon = () => {
  return (
    <div className='bg-yellow mt-40 md:flex md:items-center md:justify-between md:p-20 p-4'>
        <div className=''>
            <h1 className='font-bold md:text-6xl text-4xl text-black'>The<br /> <span className='text-white'>Hottest </span>Burger in Town.</h1>
            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut reprehenderit sed ipsa a, voluptas porro enim? Maiores, accusamus voluptatibus.</p>
            <button className='hidden md:block bg-black text-white pl-20 pr-20 pt-4 pb-4 mx-auto mt-4'>Read More</button>
        </div>
        <div>
           <img className='object-fit w-12/12 mx-auto' src={burger} alt="" />
        </div>
    </div>
  )
}

export default Soon