import axios from 'axios';
const API_URL = 'http://localhost:8000/api/';


// register function
const register = async(username,email,password)=>{
        return await axios.post(API_URL + 'register/', {
            username,
            email,
            password
        });
}

// login function
const login = async(username,password) =>{
    const res =  await axios.post(API_URL + 'token/',{
        username,
        password
    })
    if(res.status === 200){
        return res.data;
    }
    return null;
}

// logout function
const logout = ()=>{
    localStorage.removeItem("user")
}

const authService = {
    register,
    login,
    logout
}

export default authService;