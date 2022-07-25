import React from 'react'
import home from '../assets/Images/home.jpg'
import { TbTruckDelivery } from 'react-icons/tb'
import { GoDeviceMobile } from 'react-icons/go'
import { GrMap } from 'react-icons/gr'
import { GrUserWorker } from 'react-icons/gr'

const Cto = () => {
  return (
    <div className='mt-40 flex items-center w-12/12'>
        <img className='object-fit w-7/12 h-screen' src={home} alt="" />
        <div className='bg-black text-white h-screen p-20'>
            <h1 className='font-bold text-5xl'>Sit at Home <br />  <span className='text-yellow'>We will take care of you.</span></h1><br />
            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis in accusantium esse beatae culpa!</p>
            <br />
            <div className='flex items-center'>
              <TbTruckDelivery className='text-yellow text-5xl'/>
              <GoDeviceMobile className='text-yellow text-5xl'/>
              <GrMap className='text-yellow text-5xl'/>
              <GrUserWorker className='text-yellow text-5xl'/>
            </div>
        </div>
    </div>
  )
}

export default Cto