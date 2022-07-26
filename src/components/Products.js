import React from 'react'
import burger from '../assets/Images/burger3.png'
import { GiShoppingBag } from 'react-icons/gi'

// OWL CAROUSEL
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const Products = () => {

  const options = {
    loop: true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1,
            center: true,
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    },
    navText:[
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
}

  return (
    <div className='container'>
        <h3 className='text-center text-yellow font-bold mt-20'>Quick Pick</h3>
        <h1 className='text-center text-black font-bold text-6xl mb-20'>Popular Goods</h1>
        
        <OwlCarousel {...options}>
           <div className='transition'>
              <img className='object-fit ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...' src={burger} alt="burger" />
              <span className='text-center font-bold text-2xl'>Pepperoni</span>
              <div className='flex items-center justify-around'>
                <p className="text-yellow font-bold text-2xl underline">$40</p>
                <GiShoppingBag className='text-center text-yellow text-2xl'/>
              </div>
            </div>

            <div className=''>
              <img className='object-fit ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...' src={burger} alt="burger" />
              <span className='text-center font-bold text-2xl'>Pepperoni</span>
              <div className="flex items-center justify-around">
                <p className="text-yellow font-bold text-2xl underline">$30</p>
                <GiShoppingBag className='text-yellow text-2xl'/>
              </div>
            </div>

            <div className=''>
              <img className='object-fit ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...' src={burger} alt="burger" />
              <span className='text-center font-bold text-2xl'>Pepperoni</span>
              <div className="flex items-center justify-around">
                <p className="text-yellow font-bold text-2xl underline">$30</p>
                <GiShoppingBag className='text-yellow text-2xl'/>
              </div>
            </div>

            <div className=''>
              <img className='object-fit ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...' src={burger} alt="burger" />
              <span className='text-center font-bold text-2xl'>Pepperoni</span>
              <div className="flex items-center justify-around">
                <p className="text-yellow font-bold text-2xl underline">$30</p>
                <GiShoppingBag className='text-yellow text-2xl'/>
              </div>
            </div>

        </OwlCarousel>
    </div>
  )
}

export default Products