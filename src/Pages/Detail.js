import React,{useState,useEffect} from 'react'
import Footer from '../components/Footer'
import { FaTelegramPlane } from 'react-icons/fa'
import { TbTruckDelivery } from 'react-icons/tb'
import { GiCardPickup } from 'react-icons/gi'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import { detail } from '../axios'


const Detail = () => {
    const { id } = useParams();

    const detail = `http://127.0.0.1:8000/api/products/${id}/`

    const [ data,setData] = useState([])

    useEffect(() => {
        axios.get(detail)
        .then((res) =>{
            console.log(res.data);
            setData(res.data)
        })
        .catch((err) =>{
            console.log(err.response.status)
        })
    },[detail])
    
  return (
    <>
      <div className="md:flex grid px-4">
        <div className='md:flex grid md:w-8/12 w-full mx-auto shadow-2xl md:my-20 my-10 p-8'>
            <div className='w-6/12'>
                <img className='h-3/12 w-10/12 mx-auto' src={data.image} alt="" />
            </div>
            <div  className='w-6/12'>
                <small className='bg-yellow rounded p-1 font-thin'>Official Store</small>
                <h1 className='my-2 text-2xl'>{data.name}</h1>
                <small className='bg-yellow rounded p-1 font-thin uppercase'>Deal of the day</small>
                <hr className='my-4'/>
                <h1 className='font-bold text-2xl'>Ksh {data.price}</h1>
                <p className='my-4 text-sm'>+ delivery from KSh 92 (free delivery if order above KSh 999) to CBD - UON/Globe/Koja/River Road</p>
                <p className='my-2'>{data.description}</p>
                <button className='bg-yellow uppercase p-3 w-full rounded text-white font-semibold my-2'>Add To Cart</button>
            </div>
        </div>
        <div className='md:w-3/12 w-full mx-auto shadow-2xl md:my-20 my-4 p-4'>
            <h2 className='uppercase font-semibold'>delivery & returns </h2>
            <hr className='my-2'/>
            <h3 className='flex items-center font-semibold text-sm'>Deliveroo
                <FaTelegramPlane className='text-yellow'/>
            </h3>
            <small className='text-xs'>Eligible for free delivery for orders above Ksh 999 in Nairobi, Kiambu, and Mombasa (excluding medium and large items)</small>
            <hr className='my-2'/>
            <div className="flex mb-2">
                <TbTruckDelivery className='text-7xl'/>
                <div>
                    <p>Door Delivery</p>
                    <small>Delivery KSh 112 (free delivery if order above KSh 999)</small>
                    <small>Delivery by 09 August when you order within next 21hrs 56mins</small>
                </div>
            </div>
            <div className="flex">
                <GiCardPickup className='text-7xl'/>
                <div>
                    <p>Pickup Station</p>
                    <small>Delivery KSh 92 (free delivery if order above KSh 999)</small>
                    <small>Delivery by 09 August when you order within next 21hrs 56mins</small>
                </div>
            </div>
            <hr className='my-2'/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Detail