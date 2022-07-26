import React from 'react'
import burger from '../assets/Images/burger2.png'


const Soon = () => {
  return (
    <div className='bg-yellow my-40 flex items-center justify-between p-20'>
        <div className=''>
            <h1 className='font-bold text-7xl'>Coming <br /> <span className='text-white'>Soon.</span></h1>
            <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut reprehenderit sed ipsa a, voluptas porro enim? Maiores, accusamus voluptatibus.</p>
        </div>
        <div>
            <img className='object-cover' src={burger} alt="burger" />
        </div>
    </div>
  )
}

export default Soon