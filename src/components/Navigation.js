import React,{useState} from 'react'
import { GiShoppingBag } from 'react-icons/gi'
import { HiUserCircle } from 'react-icons/hi'
import { Link, NavLink  } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { BsFillPersonCheckFill } from "react-icons/bs";

const Navigation = () => {
  const [open,setOpen] = useState(false)

  return (
    <>
      <div className=" w-11/12 mx-auto rounded-2xl h-16 px-4 md:flex md:items-center justify-between">
          <div onClick={()=>setOpen(!open)} className="text-3xl absolute cursor-pointer md:hidden block pt-3 z-10">
            {
              open ? <AiOutlineClose className='text-white' /> : <BiMenu className='text-white' />
            }
          </div>
          <div className="text-3xl text-center md:pl-10 pl-14 pt-2 absolute">
            <Link to="/" className="font-semibold no-underline text-white">Deliveroo</Link>
          </div>
          <ul className={`md:flex md:items-center md:pl-80 md:pb-2 pb-12 absolute md:static md:bg-black bg-yellow px-10
                        w-11/12 rounded-2xl mt-2 right-4 md:p1-0 p1-9 transition-all duration-500
                          ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
            <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7 text-white">
              <NavLink to="/artists" className={({ isActive }) => isActive ? 'font-bold text-black no-underline' : 'md:text-white text-black no-underline'}>Home</NavLink>
            </li>
            <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7">
              <NavLink to="/fans" className={({ isActive }) => isActive ? 'font-bold text-black no-underline' : 'md:text-white text-black no-underline'}>About</NavLink>
            </li>
            <li className="cursor-ppinter md:ml-8 text-xl md:my-0 my-7">
              <NavLink to="/business" className={({ isActive }) => isActive ? 'font-bold text-black no-underline' : 'md:text-white text-black no-underline'}>Services</NavLink>
            </li>
            <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7">
              <NavLink to="/about" className={({ isActive }) => isActive ? 'font-bold text-black no-underline' : 'md:text-white text-black no-underline'}>Coming Soon</NavLink>
            </li>
          </ul>
          <div className="flex items-center justify-end pt-4 md:pt-2">
            <Link className='text-white' to='/cart'>
              <GiShoppingBag className='text-2xl mb-3 mr-10'/>
            </Link>
            <div>
              <BsFillPersonCheckFill className="text-2xl text-white" />
            </div>
          </div>
        </div>
    </>
  )
}

export default Navigation