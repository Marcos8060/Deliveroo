import React from 'react'
import image from '../assets/Images/burger3.png'
import Footer from '../components/Footer'

const Detail = () => {
  return (
    <>
      <div className="flex">
        <div className='flex w-7/12 mx-auto shadow-2xl my-20 p-10'>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <small className='bg-yellow rounded p-1 font-semibold'>Official Store</small>
                <h1 className='my-2 text-2xl'>Pepperoni</h1>
                <small className='bg-yellow rounded p-1 font-semibold'>Deal of the day</small>
                <hr className='my-4'/>
                <h1 className='font-bold text-2xl'>Ksh 38</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda illo harum sunt temporibus, amet fugit quibusdam! Quos ratione eos veritatis!</p>
                <button className='bg-yellow uppercase p-3 w-full rounded text-white font-semibold my-2'>Add To Cart</button>
            </div>
        </div>
        <div className='w-4/12 mx-auto shadow-2xl my-20 p-10'>
            <h2 className='uppercase'>delivery & returns </h2>
            <hr />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Detail