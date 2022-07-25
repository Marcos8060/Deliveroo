import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { HiUserCircle } from 'react-icons/hi'

const Navigation = () => {
  return (
    <div className='bg-white h-14 w-11/12 mx-auto rounded-2xl px-4 md:flex justify-between items-center'>
        <div>
          <h1 className='font-bold text-4xl'>Burger</h1>
        </div>
        <ul className='md:flex items-center justify-between'>
            <li className='m-4 font-semibold'>Home</li>
            <li className='m-4 font-semibold'>About</li>
            <li className='m-4 font-semibold'>Deliveries</li>
        </ul>
        <div className='flex items-center justify-between'>
            <MdShoppingBasket className='text-2xl m-4'/>
            <HiUserCircle className='text-2xl m-4'/>
        </div>
    </div>
  )
}

export default Navigation