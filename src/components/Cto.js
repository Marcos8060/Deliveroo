import React from 'react'
import home from '../assets/Images/home.jpg'
import { TbTruckDelivery } from 'react-icons/tb'
import { GoDeviceMobile } from 'react-icons/go'
import { FaMapMarkerAlt } from 'react-icons/fa'

const Cto = () => {
  return (
    <div className='mt-40 flex items-center w-12/12'>
        <img className='object-cover w-7/12 h-screen' src={home} alt="" />
        <div className='bg-black text-white h-screen p-20'>
            <h1 className='font-bold text-5xl'>Sit at Home <br />  <span className='text-yellow'>We will take care of you.</span></h1><br />
            <p className='text-gray-400 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis in accusantium esse beatae culpa!</p>
            <br /><br />
            <div className='flex items-center justify-between'>
              <div className='text-center'>
               <TbTruckDelivery className='text-yellow text-5xl text-center'/>
               <h3 className='font-thin'>Fast Delivery in 1hr</h3>
              </div>
              <div className='text-center'>
              <GoDeviceMobile className='text-yellow text-5xl'/>
              <h3 className='font-thin'>Amazing Mobile App</h3>
              </div>
              <div className='text-center'>
              <FaMapMarkerAlt className='text-yellow text-5xl'/>
              <h3 className='font-thin'>Wide Map Coverage</h3>
              </div>
            </div>
            <div className='flex justify-center items-center mt-20'>
              <button className='bg-yellow text-black pl-10 pr-10 pt-4 pb-4 rounded-3xl font-semibold'>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Cto