import React from 'react'
import footer from '../assets/Images/footer.jpg'
import { ImFacebook2 } from 'react-icons/im'
import  { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { FaRocket } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='bg-black pt-20'>
        <div className="md:flex md:items-center md:justify-center grid mb-10">
            <img className='object-cover h-36 md:w-4/12 w-12/12 mx-auto mb-2 md:rounded-l-xl' src={footer} alt="" />
            <div className='bg-yellow p-10  md:h-36 md:rounded-r-xl w-10/12 mx-auto'>
                <h1 className='text-black font-semibold md:text-2xl text-sm text-center'>Call Us to make an Order Now</h1>
                <p className='text-white md:font-bold md:text-2xl text-sm text-center'>+254-702-854-204</p>
            </div>
        </div> 
        <div className='w-8/12 mx-auto'>
          <div className='flex items-center justify-center mb-8'>
            <FaRocket className='text-yellow text-4xl'/>
            <h1 className='text-center font-bold text-white text-3xl'>Burger</h1>
          </div>
          <p className='text-center text-white mb-8 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto neque, quisquam laudantium unde dolores explicabo! Qui saepe quos architecto suscipit?</p>

          <div className='flex items-center justify-center text-yellow mb-8'>
           <ImFacebook2  className='mr-4'/>
           <BsTwitter className='mr-4 ml-4'/>
           <BsLinkedin className='mr-4 ml-4'/>
           <BsYoutube className='mr-4 ml-4'/>
          </div>
          <p className='text-center text-white pb-10 font-thin'><span className='text-yellow font-bold'>Burger</span> @ All Rights Reserved 2022</p>
        </div>
    </div>
  )
}


// const FooterSection = styled.div`
//     background: url(${footer});
//     background-size: cover;
//     background-repeat: no-repeat;
//     position: relative;
//     z-index 1;
//     height: 70vh;

//         &::after{
//         position: absolute;
//         content: "";
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         background-color: #001123;
//         opacity: 0.7;
//         z-index: -1;
//         }
// `
export default Footer


