import React from 'react'
import burger from '../assets/Images/burger9.jpg'
import { GiShoppingBag } from 'react-icons/gi'
import { BsPlusCircle } from 'react-icons/bs'


// OWL CAROUSEL
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const Products = () => {

  const options = {
    loop: true,
    margin:10,
    nav:true,
    center: true,
    responsive:{
        0:{
            items:1,
            center:false
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
    <div className=''>
        <h3 className='text-center text-yellow font-bold mt-20'>Quick Pick</h3>
        <h1 className='text-center text-black font-bold md:text-6xl text-4xl mb-20'>Popular Goods</h1>
        
        <div className='flex gap-4 items-center my-6 overflow-x-scroll no-scrollbar'>

          <div className="relative hover:cursor-pointer card--wrapper">
            <img className='h-80 w-80 rounded-2xl' src={burger} alt='burger' />
            <div className="absolute bottom-0 left-0 right-0 px-2 py-4 h-2/12 bg-black rounded-bl-2xl rounded-br-2xl	flex flex-col justify-center items-center w-12/12 opacity-80 text-white">
              <p className='mb-2'>Pepperoni</p>
              <div className="flex items-center justify-between">
                <p className='text-2xl mr-10'>$80</p>
                <BsPlusCircle className='text-yellow text-4xl ml-10'/>
              </div>
            </div>
          </div>

          <div className="relative hover:cursor-pointer card--wrapper">
            <img className='h-80 w-80 rounded-2xl' src={burger} alt='burger' />
            <div className="absolute bottom-0 left-0 right-0 px-2 py-4 h-2/12 bg-black rounded-bl-2xl rounded-br-2xl	flex flex-col justify-center items-center w-12/12 opacity-80 text-white">
              <p className='mb-2'>Pepperoni</p>
              <div className="flex items-center justify-between">
                <p className='text-2xl mr-10'>$80</p>
                <BsPlusCircle className='text-yellow text-4xl ml-10'/>
              </div>
            </div>
          </div>

          <div className="relative hover:cursor-pointer card--wrapper">
            <img className='h-80 w-80 rounded-2xl' src={burger} alt='burger' />
            <div className="absolute bottom-0 left-0 right-0 px-2 py-4 h-2/12 bg-black rounded-bl-2xl rounded-br-2xl	flex flex-col justify-center items-center w-12/12 opacity-80 text-white">
              <p className='mb-2'>Pepperoni</p>
              <div className="flex items-center justify-between">
                <p className='text-2xl mr-10'>$80</p>
                <BsPlusCircle className='text-yellow text-4xl ml-10'/>
              </div>
            </div>
          </div>

          <div className="relative hover:cursor-pointer card--wrapper">
            <img className='h-80 w-80 rounded-2xl' src={burger} alt='burger' />
            <div className="absolute bottom-0 left-0 right-0 px-2 py-4 h-2/12 bg-black rounded-bl-2xl rounded-br-2xl	flex flex-col justify-center items-center w-12/12 opacity-80 text-white">
              <p className='mb-2'>Pepperoni</p>
              <div className="flex items-center justify-between">
                <p className='text-2xl mr-10'>$80</p>
                <BsPlusCircle className='text-yellow text-4xl ml-10'/>
              </div>
            </div>
          </div>

          <div className="relative hover:cursor-pointer card--wrapper">
            <img className='h-80 w-80 rounded-2xl' src={burger} alt='burger' />
            <div className="absolute bottom-0 left-0 right-0 px-2 py-4 h-2/12 bg-black rounded-bl-2xl rounded-br-2xl	flex flex-col justify-center items-center w-12/12 opacity-80 text-white">
              <p className='mb-2'>Pepperoni</p>
              <div className="flex items-center justify-between">
                <p className='text-2xl mr-10'>$80</p>
                <BsPlusCircle className='text-yellow text-4xl ml-10'/>
              </div>
            </div>
          </div>

        </div>

    </div>
  )
}

export default Products