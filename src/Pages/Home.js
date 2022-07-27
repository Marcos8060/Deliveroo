import React from 'react'
import Navigation from '../components/Navigation'
import burger from '../assets/Images/burger2.png'
import Delivery from '../components/Delivery'
import Products from '../components/Products'
import Cto from '../components/Cto'
import Soon from '../components/Soon'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='home--background h-screen pt-4 mx-auto'>
        {/* <Navigation /> */}
        <div className='px-4 md:flex'>
            <img className='object-cover md:w-8/12 mt-20' src={burger} alt="burger" />
            <h1 className='text-white md:text-8xl text-6xl text-center font-bold md:mt-56'>Delicious <span className='text-yellow'>Burgers.</span></h1>
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