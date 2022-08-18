import React from 'react'
import Navigation from '../components/Navigation'
import Delivery from '../components/Delivery'
import Products from '../components/Products'
import Cto from '../components/Cto'
import Soon from '../components/Soon'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import Hero from '../components/Hero'


const Home = () => {
  return (
    <>
        <Navigation />
        <Hero />

        <Delivery />

        <Products />

        <Cto />

        <Soon />

        <Testimonial />

        <Footer />
    </>
  )
}

export default Home