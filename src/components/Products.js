import React from 'react'
import burger from '../assets/Images/burger3.png'
import { GiShoppingBag } from 'react-icons/gi'


import Slider from "react-slick";
// REACT SLICK
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Products = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

  return (
    <div className='container'>
        <h3 className='text-center text-yellow font-bold mt-20'>Quick Pick</h3>
        <h1 className='text-center text-black font-bold text-6xl mb-20'>Popular Goods</h1>
        
        <Slider {...settings}>
           <div className='text-center transition'>
              <img className='object-fit ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...' src={burger} alt="burger" />
              <span className='text-center font-bold text-2xl'>Pepperoni</span>
              <div className='flex items-center justify-around'>
                <p className="text-yellow font-bold text-2xl underline">$40</p>
                <GiShoppingBag className='text-center text-yellow text-2xl'/>
              </div>
            </div>
            <div className='text-center'>
              <img className='object-fit ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...' src={burger} alt="burger" />
              <span className='text-center font-bold text-2xl'>Pepperoni</span>
              <div className="flex items-center justify-around">
                <p className="text-yellow font-bold text-2xl underline">$30</p>
                <GiShoppingBag className='text-yellow text-2xl'/>
              </div>
            </div>
            <div className='text-center'>
              <img className='object-fit ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...' src={burger} alt="burger" />
              <span className='text-center font-bold text-2xl'>Pepperoni</span>
              <div className="flex items-center justify-around">
                <p className="text-yellow font-bold text-2xl underline">$30</p>
                <GiShoppingBag className='text-yellow text-2xl'/>
              </div>
            </div>
            <div className='text-center'>
              <img className='object-fit ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...' src={burger} alt="burger" />
              <span className='text-center font-bold text-2xl'>Pepperoni</span>
              <div className="flex items-center justify-around">
                <p className="text-yellow font-bold text-2xl underline">$30</p>
                <GiShoppingBag className='text-yellow text-2xl'/>
              </div>
            </div>
        </Slider>
    </div>
  )
}

export default Products