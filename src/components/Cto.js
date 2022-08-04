import React from 'react'
import home from '../assets/Images/home.jpg'
import { TbTruckDelivery } from 'react-icons/tb'
import { GoDeviceMobile } from 'react-icons/go'
import { FaMapMarkerAlt } from 'react-icons/fa'

const Cto = () => {
  return (
    <div className='mt-40 md:flex md:items-center w-12/12 grid'>
        <img className='object-cover md:w-7/12 w-full md:h-screen h-auto' src={home} alt="" />
        <div className='bg-black text-white h-screen md:p-20 pt-10 text-center px-4'>
            <h1 className='font-bold md:text-5xl text-4xl mt-4'>Sit at Home <br />  <span className='text-yellow'>We will take care of you.</span></h1><br />
            <p className='text-gray-400 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis in accusantium esse beatae culpa!</p>
            <br /><br />
            <div className='md:flex md:items-center md:justify-between grid grid-cols-2'>
              <div className='m-4'>
               <TbTruckDelivery className='text-yellow text-5xl text-center'/>
               <h3 className='font-thin'>Fast Delivery in 1hr</h3>
              </div>
              <div className='m-4'>
              <GoDeviceMobile className='text-yellow text-5xl'/>
              <h3 className='font-thin'>Amazing Mobile App</h3>
              </div>
              <div className='m-4'>
              <FaMapMarkerAlt className='text-yellow text-5xl'/>
              <h3 className='font-thin'>Wide Map Coverage</h3>
              </div>
            </div>
            <div className='flex justify-center items-center md:mt-20 mt-10'>
              <button className='md:block bg-yellow text-black pl-10 pr-10 pt-4 pb-4 font-semibold mb-4'>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Cto