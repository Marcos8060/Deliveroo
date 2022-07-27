import React from 'react'
import Navigation from '../components/Navigation'
import burger from '../assets/Images/burger3.png'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import Footer from '../components/Footer'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'


const Cart = () => {
  return (
    <>
    <Navigation />

    <div className='flex'>
    <div className='p-10 bg-white mb-20 rounded shadow-2xl w-8/12 ml-4 mt-16'>
        <div className='flex items-center justify-between w-full'>
           <h1 className='font-semibold text-2xl'>Shopping Cart</h1>
           <h1 className='font-semibold text-2xl'>3 Items</h1>
        </div>
        <hr className='text-grey-300 mt-8 w-full'/>
        <div className='flex items-center justify-between mt-4'>
            <h2 className='w-1/4 ml-4 uppercase font-semibold'>Product Details</h2>
            <h2 className='uppercase font-semibold'>Quantity</h2>
            <h2 className='uppercase font-semibold'>Price</h2>
            <h2 className='uppercase font-semibold'>Total</h2>
        </div>

        <div className='flex items-center justify-between hover:cursor-pointer'>
            <div className='flex items-center'>
                <div>
                   <img className='object-cover w-36' src={burger} alt="" />
                </div>
                <div className='flex flex-col text-sm'>
                   <p className='font-bold'>Pepperoni</p>
                   <p className='font-semibold text-xs'>In Stock</p>
                   <p  className='hover:text-yellow hover:font-bold'>Remove</p>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <AiOutlineMinus className=''/>
                <span className='border pl-2 pr-2 font-bold m-2'>0</span>
                <AiOutlinePlus />
            </div>
            <div>
               <p className='font-semibold'>$29</p>
            </div>
            <div>
               <p className='font-semibold'>$29</p>
            </div>
        </div>
        <hr />

        <div className='flex items-center justify-between hover:cursor-pointer'>
            <div className='flex items-center'>
                <div>
                   <img className='object-cover w-36' src={burger} alt="" />
                </div>
                <div className='flex flex-col text-sm'>
                   <p className='font-bold'>Pepperoni</p>
                   <p className='font-semibold text-xs'>In Stock</p>
                   <p className='hover:text-yellow hover:font-bold'>Remove</p>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <AiOutlineMinus className=''/>
                <span className='border pl-2 pr-2 font-bold m-2'>0</span>
                <AiOutlinePlus />
            </div>
            <div>
               <p className='font-semibold'>$29</p>
            </div>
            <div>
               <p className='font-semibold'>$29</p>
            </div>
        </div>
        <hr />

        <div className='flex items-center justify-between hover:cursor-pointer'>
            <div className='flex items-center'>
                <div>
                   <img className='object-cover w-36' src={burger} alt="" />
                </div>
                <div className='flex flex-col text-sm'>
                   <p className='font-bold'>Pepperoni</p>
                   <p className='font-semibold text-xs'>In Stock</p>
                   <p  className='hover:text-yellow hover:font-bold'>Remove</p>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <AiOutlineMinus className=''/>
                <span className='border pl-2 pr-2 font-bold m-2'>0</span>
                <AiOutlinePlus />
            </div>
            <div>
               <p className='font-semibold'>$29</p>
            </div>
            <div>
               <p className='font-semibold'>$29</p>
            </div>
        </div>

         <Link className='flex items-center' to='/'>
           <HiOutlineArrowNarrowLeft />
           <span className='font-semibold ml-2'>Continue Shopping</span>
         </Link>

    </div>
    <div className='p-10 bg-white mb-20 rounded shadow-2xl w-3/12 mx-auto mt-16'>
        <h1 className='text-2xl'>Order Summary</h1>
        <hr className='mt-8'/>
        <div className='flex items-center justify-between mt-4'>
            <h1>Items 3</h1>
            <h1>$490</h1>
        </div>
    </div>
    </div>

    <Footer />
    </>
  )
}

export default Cart