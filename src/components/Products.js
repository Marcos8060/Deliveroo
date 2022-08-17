import React,{useState,useEffect} from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import axios from 'axios'
import { products } from '../axios'
import { Link } from 'react-router-dom'


const Products = () => {
  const [data,setData] = useState([])


  useEffect(() =>{
    axios.get(products)
    .then((res) =>{
      setData(res.data)
    })
    .catch((err) =>{
      console.log(err.response.status)
    })
  },[data])

  return (
    <div className=''>
        <h3 className='text-center text-yellow font-bold mt-20'>Quick Pick</h3>
        <h1 className='text-center text-black font-bold md:text-6xl text-4xl mb-20'>Popular Goods</h1>
        
        <div className='flex gap-4 items-center my-6 overflow-x-scroll no-scrollbar'>

         { data.map((item) =>(

           <Link to={`detail/${item.id}/`}>
            <div className="relative hover:cursor-pointer card--wrapper" key={item.id}>
                <img className='h-80 w-80 rounded-2xl' src={item.image} alt='burger' />
                <div className="absolute bottom-0 left-0 right-0 px-2 py-4 h-2/12 bg-black rounded-bl-2xl rounded-br-2xl	flex flex-col justify-center items-center w-12/12 opacity-80 text-white">
                  <p className='mb-2'>{item.name}</p>
                  <div className="flex items-center justify-between">
                    <p className='mr-10'>ksh {item.price}</p>
                    <BsPlusCircle className='text-yellow text-2xl ml-10'/>
                  </div>
                </div>
              </div>
           </Link>

         ))}

        </div>

    </div>
  )
}

export default Products