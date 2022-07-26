import React from 'react'
import { ImQuotesLeft } from 'react-icons/im'

// OWL CAROUSEL
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
    const options = {
        loop: true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },
        navText:[
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>',
        ],
    }

  return (
    <div className='p-20'>
        <p className='text-center text-yellow font-bold'>Testimonials</p>
        <h1 className='text-center font-bold text-black text-6xl'>Why Our Clients Choose Us.</h1>
        <ImQuotesLeft  className='mx-auto text-4xl text-yellow font-bold mt-14 mb-20'/>

        <OwlCarousel {...options}>
            <div className='w-8/12 mx-auto'>
                <p className='text-center text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas totam deleniti quam dicta consequuntur.</p>
                {/* <img className='' src="https://media.istockphoto.com/photos/pensive-mature-man-looking-at-the-camera-on-gray-background-picture-id1334905996?k=20&m=1334905996&s=612x612&w=0&h=yzzgyBbSI7q4UdB3GkyNFoGyBb7Kw1Sm7cu5NaT0d1o=" alt="" /> */}
            </div>
            <div  className='w-8/12 mx-auto'>
                <p className='text-center text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas totam deleniti quam dicta consequuntur.</p>
                {/* <img src="https://media.istockphoto.com/photos/pensive-hispanic-man-looking-at-the-camera-picture-id1263465473?k=20&m=1263465473&s=612x612&w=0&h=iGEkZHDCFpx_StN8LwH9c-yjhLvhwEvw0VxCTHKl_HE=" alt="" /> */}
            </div>
            <div  className='w-8/12 mx-auto'>
                <p className='text-center text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas totam deleniti quam dicta consequuntur.</p>
                {/* <img src="https://media.istockphoto.com/photos/pensive-mature-man-looking-at-the-camera-on-gray-background-picture-id1334905996?k=20&m=1334905996&s=612x612&w=0&h=yzzgyBbSI7q4UdB3GkyNFoGyBb7Kw1Sm7cu5NaT0d1o=" alt="" /> */}
            </div>
            <div  className='w-8/12 mx-auto'>
                <p className='text-center text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas totam deleniti quam dicta consequuntur.</p>
                {/* <img src="https://media.istockphoto.com/photos/serious-hispanic-girl-picture-id532321925?k=20&m=532321925&s=612x612&w=0&h=jUnYLYYqmKT7TB5jjIRyFNBmydcpMx_CAjEKlAvDSlI=" alt="" /> */}
            </div>
        </OwlCarousel>
    </div>
  )
}

export default Testimonial