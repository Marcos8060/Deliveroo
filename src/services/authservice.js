import axios from 'axios';
const API_URL = 'http://localhost:8000/api/'


// register function
const register = (email,username,password)=>{
    return axios.post(API_URL + 'register/',{
        username,
        email,
        password
    })
}

// login function
const login = (username,password) =>{
    return axios.post(API_URL + 'token/',{
        username,
        password
    })
    .then((res) =>{
        if(res.data.access_token){
            localStorage.setItem("user", JSON.stringify(res.data))
        }
    })
}

// logout function
const logout = ()=>{
    localStorage.removeItem("user")
}