import React from 'react'
import burger from '../assets/Images/burger7.png'


const Soon = () => {
  return (
    <div className='bg-yellow mt-40 md:flex md:items-center md:justify-between md:p-20 p-4'>
        <div className=''>
            <h1 className='font-bold text-black md:text-7xl text-5xl pt-10 mb-4'>Coming <span className='text-white'>Soon.</span></h1>
            <h1 className='font-bold md:text-6xl text-4xl text-black'>The<br /> <span className='text-black'>Hottest Burger in Town.</span></h1>
            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut reprehenderit sed ipsa a, voluptas porro enim? Maiores, accusamus voluptatibus.</p>
            <button className='hidden md:block bg-black text-white pl-20 pr-20 pt-4 pb-4 rounded-3xl mx-auto mt-4'>Read More</button>
        </div>
        <div>
            <img className='object-cover' src={burger} alt="burger" />
        </div>
    </div>
  )
}

export default Soon