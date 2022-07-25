import React from 'react'
import { FaHamburger } from 'react-icons/fa'
import { GrDeliver } from 'react-icons/gr'
import { BiSupport } from 'react-icons/bi'
import { GiCash } from 'react-icons/gi'

const Category = () => {
  return (
    <div className='grid grid-cols-4'>
        <div className='bg-category h-18 p-10 m-2 rounded-2xl flex items-center justify-center'>
            <GrDeliver className='text-6xl bg-yellow rounded-full p-4'/>
            <span className='font-bold'>Fast Delivery</span>
        </div>
        <div className='bg-category h-18 p-10 m-2 rounded-2xl flex items-center justify-center'>
            <BiSupport className='text-6xl bg-yellow rounded-full p-4'/>
            <span className='font-bold'>24/7 Support</span>
        </div>
        <div className='bg-category h-18 p-10 m-2 rounded-2xl flex items-center justify-center'>
            <FaHamburger className='text-6xl bg-yellow rounded-full p-4'/>
            <span className='font-bold'>Fast Food</span>
        </div>
        <div className='bg-category h-18 p-10 m-2 rounded-2xl flex items-center justify-center'>
            <GiCash className='text-6xl bg-yellow rounded-full p-4'/>
            <span className='font-bold'>Refundable</span>
        </div>
    </div>
  )
}

export default Category