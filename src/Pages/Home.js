import React from 'react'
import Navigation from '../components/Navigation'
import soda from '../assets/Images/soda.png'
import Delivery from '../components/Delivery'
import Products from '../components/Products'
import Cto from '../components/Cto'
import Soon from '../components/Soon'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='home--background h-screen pt-4 mx-auto'>
        <Navigation />
        <div className='px-4 md:flex md:justify-between md:items-center'>
          <div className='mt-20 text-center'>
            <h1 className='text-white md:text-6xl text-4xl font-bold mb-2'>Delicious Burgers at <span className='text-yellow'>Deliveroo</span>.</h1>
            <p className='text-white font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum voluptate dolores, totam hic rerum a eligendi doloremque quis fugiat.</p>
            <button className='bg-yellow text-black px-8 pt-4 pb-4 mt-4 font-semibold'>Buy Now</button>
          </div>
            <img className='object-cover md:w-6/12 mt-20' src={soda} alt="burger" />
        </div>

        <Delivery />

        <Products />

        <Cto />

        <Soon />

        <Testimonial />

        <Footer />
    </div>
  )
}

export default Home