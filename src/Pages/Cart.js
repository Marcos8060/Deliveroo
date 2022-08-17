import React from 'react'
// import Navigation from '../components/Navigation'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import Footer from '../components/Footer'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import image from '../assets/Images/burger4.jpg'
import { RiDeleteBinLine } from 'react-icons/ri'

const Cart = () => {

    const cartItems  = useSelector((store)=> store);
    console.log(cartItems)
  return (
    <>
      <div className='bg-black w-12/12 h-32 flex justify-center items-center'>
        <h1 className='text-center uppercase text-white font-semibold'>Shopping Cart</h1>
      </div>
      <div className='hidden md:block md:flex items-center justify-between w-10/12 mx-auto mt-24 uppercase font-semibold'>
        <h1 className='w-5/12'>Product</h1>
        <h1 className='w-2/12'>Price </h1>
        <h1 className=''>Quantity</h1>
        <h1 className=''>Total</h1>
      </div>
      <hr className='hidden md:block w-10/12 mx-auto mt-2 mb-4 text-gray'/>
      <div className='md:flex grid md:items-center mt-20 md:justify-between w-10/12 mx-auto'>
        <div className='flex items-center'>
          <img className='w-32 md:mr-3 mx-4 md:cartImg rounded' src={image} alt="" />
          <div>
            <p className='font-thin'>Nike Zoom</p>
            <p className='font-semibold'>Price: 34</p>
            <RiDeleteBinLine className='mt-2'/>
          </div>
        </div>
        <div className='md:price text-center'>
          <p>ksh 400</p>
        </div>
        <div className='flex items-center justify-center text-center md:border md:quantity my-2 md:py-1 md:px-1'>
          <AiOutlineMinus className='font-semibold mx-2 text-center'/>
          <p className='font-bold text-center'>0</p>
          <AiOutlinePlus className='mx-2 text-center'/>
        </div>
        <div>
          <p className='text-center'>ksh 1400</p>
        </div>
      </div>
      
      <hr className='w-10/12 mx-auto mt-4 mb-4 text-gray'/>


      <div className="md:flex grid items-center justify-between w-10/12 mx-auto mt-10">
        <div>
          <p>Add Order Note</p>
          <form>
            <textarea className='p-2 border w-12/12' name="" id="" cols="40" rows="4" placeholder='how can we help you?'></textarea>
          </form>
        </div>
        <div className='text-center'>
          <h1 className='uppercase font-bold'>subtotal:  ksh 4000</h1>
          <p>Taxes, shipping and discounts codes calculated at checkout</p>
          <button className='uppercase bg-black text-white py-2 px-8 mt-2 font-semibold mb-10'>Check out</button>
        </div>
      </div>
    </>
  )
}

export default Cart