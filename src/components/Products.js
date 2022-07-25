import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
        <h3 className='text-center text-yellow font-bold mt-20'>Quick Pick</h3>
        <h1 className='text-center text-black font-bold text-6xl'>Popular Goods</h1>
        <ul className='flex justify-center items-center m-4'>
            <li className='m-4 font-bold'>
                <Link to='/all'>All</Link>
            </li>
            <li className='m-4 font-bold'>
                <Link to='/burger'>Burger</Link>
            </li>
            <li className='m-4 font-bold'>
                <Link to='/pizza'>Hot Pizza</Link>
            </li>
        </ul>
    </div>
  )
}

export default Products