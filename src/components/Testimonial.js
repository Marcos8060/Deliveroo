import React from 'react'
import { ImQuotesLeft } from 'react-icons/im'
import { ImQuotesRight } from 'react-icons/im'


// OWL CAROUSEL
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
    const options = {
        loop: true,
        margin:10,
        nav:true,
        center: true,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive:{
            0:{
                items:1,
                dots: true,
                center: false
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        },
        navText:[
          '<i class="bi bi-arrow-return-left"></i>',
          '<i class="bi bi-arrow-return-right"></i>',
        ],
    }

  return (
    <div className='md:p-20 p-8'>
        <p className='text-center text-yellow font-bold'>Testimonials</p>
        <h1 className='text-center font-bold text-black md:text-6xl text-4xl'>Why Our Clients Choose Us.</h1>
        <ImQuotesLeft  className='mx-auto text-4xl text-yellow font-bold mt-14 mb-20'/>

        <OwlCarousel {...options}>

            <div className='w-10/12 mx-auto bg-grey text-black p-10 rounded-2xl item mt-8'>
                <ImQuotesLeft/>
                <p className='text-center text-2xsm font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas totam deleniti quam dicta consequuntur.</p>
                <ImQuotesRight className='ml-auto'/>
                <small className='text-2sm font-thin text-yellow'>Jared Oyugi.</small>
            </div>

            <div  className='w-10/12 mx-auto bg-grey text-black p-10 rounded-2xl item mt-8'>
                <ImQuotesLeft/>
                <p className='text-center font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas totam deleniti quam dicta consequuntur.</p>
                <ImQuotesRight className='ml-auto'/>
                <small className='text-2sm font-thin text-yellow'>Ann Kaboyo.</small>
            </div>

            <div  className='w-10/12 mx-auto bg-grey text-black p-10 rounded-2xl item mt-8'>
                <ImQuotesLeft/>
                <p className='text-center font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas totam deleniti quam dicta consequuntur.</p>
                <ImQuotesRight className='ml-auto'/>
                <small className='text-2sm font-thin text-yellow'>Randy Wilson.</small>
            </div>

            <div  className='w-10/12 mx-auto bg-grey text-black p-10 rounded-2xl item mt-8'>
                <ImQuotesLeft/>
                <p className='text-center font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas totam deleniti quam dicta consequuntur.</p>
                <ImQuotesRight className='ml-auto'/>
                <small className='text-2sm font-thin text-yellow'>Ritah Anyango.</small>
            </div>

        </OwlCarousel>
    </div>
  )
}

export default Testimonial