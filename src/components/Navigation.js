import React,{useState} from 'react'
import { GiShoppingBag } from 'react-icons/gi'
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
              <NavLink to="/about" className={({ isActive }) => isActive ? 'font-bold text-black no-underline' : 'md:text-white text-black no-underline'}>
                <GiShoppingBag className='text-2xl'/>
              </NavLink>
            </li>
          </ul>
            <div className="flex items-center justify-end pt-2 md:pt-2 pr-20">
                  <div className='dropdown inline-block relative'>
                    <BsFillPersonCheckFill className="text-2xl text-white cursor-pointer" />
                    <ul className='dropdown-menu hidden bg-yellow w-32 rounded p-4 text-left absolute pr-10'>
                      <li className='hover:font-bold'>
                        <Link to='/'>Profile</Link>
                      </li>
                      <li className='hover:font-bold my-2'>
                        <Link to='/register'>Sign Up</Link>
                      </li>
                      <li className='hover:font-bold'>
                        <Link to='/'>Settings</Link>
                      </li>
                    </ul>
                  <div>
            </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navigation