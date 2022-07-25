import React from 'react'
import { FaHamburger } from 'react-icons/fa'
import { GrDeliver } from 'react-icons/gr'
import { BiSupport } from 'react-icons/bi'
import { GiCash } from 'react-icons/gi'

const Category = () => {
  return (
    <div className='grid grid-cols-4 mt-20'>
        <div className='bg-black h-18 p-10 m-2 rounded-2xl flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'>
            <GrDeliver className='text-6xl bg-yellow rounded-full p-4'/>
            <span className='font-bold text-white'>Fast Delivery</span>
        </div>
        <div className='bg-black h-18 p-10 m-2 rounded-2xl flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'>
            <BiSupport className='text-6xl bg-yellow rounded-full p-4'/>
            <span className='font-bold text-white'>24/7 Support</span>
        </div>
        <div className='bg-black h-18 p-10 m-2 rounded-2xl flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'>
            <FaHamburger className='text-6xl bg-yellow rounded-full p-4'/>
            <span className='font-bold text-white'>Fast Food</span>
        </div>
        <div className='bg-black h-18 p-10 m-2 rounded-2xl flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'>
            <GiCash className='text-6xl bg-yellow rounded-full p-4'/>
            <span className='font-bold text-white'>Refundable</span>
        </div>
    </div>
  )
}

export default Category