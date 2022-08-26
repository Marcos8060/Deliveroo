import React,{useState} from 'react'
import Footer from '../components/Footer'
import { register } from '../axios'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import { clearMessage } from '../redux/features/message/messageSlice'


const Register = () => {
    const dispatch = useDispatch();
    const [formData,setFormData] = useState({
        username:'',
        email: '',
        password:'',
    })


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
         })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        axios.post(register,{
            username: formData.username,
            email: formData.email,
            password: formData.password
        })
        .then((res) =>{
            console.log(res.data)
        })
        .catch((err) =>{
            console.log(err.response.status)
        })
    }


  return (
    <>
        <div className='p-4 mb-20'>
            <div className='shadow-2xl md:w-4/12 w-full mx-auto p-4 mt-20 rounded'>
                <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-full'>
                    <input 
                      name='username' 
                      className='block my-4 p-2 w-11/12 mx-auto border rounded focus:border-none' 
                      placeholder='username...'
                      onChange={handleChange}
                       />
                    <input 
                      name='email' 
                      className='block my-4 p-2 w-11/12 mx-auto border rounded' 
                      type="text" 
                      placeholder='email...' 
                      onChange={handleChange}
                      />
                    <input 
                      name='password' 
                      className='block my-4 p-2 w-11/12 mx-auto border rounded' 
                      type="text" 
                      placeholder='password...' 
                      onChange={handleChange}
                      />
                    <button className='bg-black text-white p-2 rounded w-11/12 mx-auto'>Sign Up</button>
                </form>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Register