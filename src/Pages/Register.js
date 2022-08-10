import React from 'react'
import Footer from '../components/Footer'


const Register = () => {
  return (
    <>
        <div className='p-4 mb-20'>
            <div className='shadow-2xl md:w-4/12 w-full mx-auto p-4 mt-20 rounded'>
                <form className='flex flex-col items-center justify-center w-full'>
                    <input className='block my-4 p-2 w-11/12 mx-auto border rounded focus:border-none' placeholder='username...' />
                    <input className='block my-4 p-2 w-11/12 mx-auto border rounded' type="text" placeholder='email...' />
                    <input className='block my-4 p-2 w-11/12 mx-auto border rounded' type="text" placeholder='password...' />
                    <button className='bg-black text-white p-2 rounded w-11/12 mx-auto'>Sign Up</button>
                </form>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Register