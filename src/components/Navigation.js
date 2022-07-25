import React from 'react'

const Navigation = () => {
  return (
    <div className='bg-white h-14 w-11/12 mx-auto rounded-2xl px-4 md:flex justify-between items-center'>
        <div>
          <h1 className='font-bold text-4xl'>Burger</h1>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Deliveries</li>
        </ul>
    </div>
  )
}

export default Navigation