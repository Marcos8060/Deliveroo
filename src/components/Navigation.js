import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { HiUserCircle } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='text-yellow h-14 w-11/12 mx-auto rounded-2xl px-4 md:flex justify-between items-center'>
        <div>
          <h1 className='font-bold text-4xl'>Burger</h1>
        </div>
        <ul className='md:flex items-center justify-between'>
            <li className='m-4 font-semibold'>
                <Link to='/'>Home</Link>
            </li>
            <li className='m-4 font-semibold'>
                <Link to='/about'>About</Link>
            </li>
            <li className='m-4 font-semibold'>
                <Link to='/deliveries'>Deliveries</Link>
            </li>
        </ul>
        <div className='flex items-center justify-between'>
            <MdShoppingBasket className='text-2xl m-4'/>
            <HiUserCircle className='text-2xl m-4'/>
        </div>
    </div>
  )
}

export default Navigation