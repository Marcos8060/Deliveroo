import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../message/messageSlice";
import authService from "../../../services/authservice";

// get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));


// register aync thunk
export const register = createAsyncThunk(
    "auth/register/",
    async({ username,email,password}, thunkAPI) =>{
        try {
            const response = await authService.register({username,email,password});
            thunkAPI.dispatch(setMessage(response.data.message));
            return response.data.message;
        } catch (error) {
            const message = 
            (
                error.response && 
                error.response.data &&
                error.response.data.message
            ) || 
            error.message || 
            error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
)

// login async thunk
export const login = createAsyncThunk(
    "auth/logn",
    async({ username, password}, thunkAPI) =>{
        try {
            const data = await authService.login({ username,password});
            return { user: data };
        } catch (error) {
            const message = 
            (
                error.response && 
                error.response.data && 
                error.response.data.message
            ) || 
                error.message || 
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
)

// logout async thunk
export const logout = createAsyncThunk(
    "auth/logout",
    async () =>{
        authService.logout();
    }
)


// authentication slice
