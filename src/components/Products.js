import React from 'react'
import burger from '../assets/Images/burger3.png'


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
        <h1 className='text-center text-black font-bold text-6xl'>Popular Goods</h1>
        
        <Slider {...settings}>
           <div className='text-center'>
              <img className='object-fit' src={burger} alt="burger" />
              <span className='text-center font-bold'>Pepperoni</span>
              <small className='block text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, saepe.</small>
            </div>
            <div className='text-center'>
              <img className='object-fit' src={burger} alt="burger" />
              <span className='text-center font-bold'>Pepperoni</span>
              <small className='block'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, voluptatibus?</small>
            </div>
            <div className='text-center'>
              <img className='object-fit' src={burger} alt="burger" />
              <span className='text-center font-bold'>Pepperoni</span>
              <small className='block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, sapiente?</small>
            </div>
            <div>
              <img className='object-fit' src={burger} alt="burger" />
              <span className='text-center font-bold'>Pepperoni</span>
              <small className='block'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, non.</small>
            </div>
        </Slider>
    </div>
  )
}

export default Products