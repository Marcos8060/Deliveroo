import React from 'react'
import Navigation from '../components/Navigation'
import burger from '../assets/Images/burger2.png'

const Home = () => {
  return (
    <div className='home--background h-screen p-4 mx-auto'>
        <Navigation />
        <div className='px-4 flex'>
            <img className='object-cover w-8/12 sm:w-12/12' src={burger} alt="burger" />
            <h1 className='text-white text-8xl font-bold my-40'>Delicious <span className='text-yellow'>Burgers.</span></h1>
        </div>
    </div>
  )
}

export default Home