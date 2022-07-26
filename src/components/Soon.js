import React from 'react'
import burger from '../assets/Images/burger7.png'


const Soon = () => {
  return (
    <div className='bg-yellow mt-40 flex items-center justify-between p-20'>
        <div className=''>
            <h1 className='font-bold text-black text-7xl'>Coming Soon.</h1>
            <h1 className='font-bold text-6xl text-white'>Always<br /> <span className='text-black'>the Hottest Burger.</span></h1>
            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut reprehenderit sed ipsa a, voluptas porro enim? Maiores, accusamus voluptatibus.</p>
            <button className='bg-black text-white pl-20 pr-20 pt-4 pb-4 rounded-3xl mx-auto mt-4'>Read More</button>
        </div>
        <div>
            <img className='object-cover' src={burger} alt="burger" />
        </div>
    </div>
  )
}

export default Soon