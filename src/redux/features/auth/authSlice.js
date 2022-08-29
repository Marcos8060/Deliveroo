import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../message/messageSlice";
import authService from "../../../services/authservice";

// get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));


// register aync thunk
export const register = createAsyncThunk(
    "api/register/",
    async({ username,email,password}, thunkAPI) =>{
        try {
            const response = await authService.register(username,email,password);
            thunkAPI.dispatch(setMessage(response.data.message));
            return response.data;
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
    "api/token/",
    async({ username, password}, thunkAPI) =>{
        try {
            const data = await authService.login(username,password);
            console.log(data);
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
const initialState = user 
 ? { isLoggedIn : true, user}
 : { isLoggedIn : false, user: null}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers:{
        [register.fulfilled]:(state,action) =>{
            state.isLoggedIn = false;
        },
        [register.rejected]: (state,action) =>{
            state.isLoggedIn = false;
        },
        [login.fulfilled]: (state,action) =>{
            state.isLoggedIn = true;
            state.user = action.payload.user
        },
        [login.rejected]:(state,action) =>{
            state.isLoggedIn = false;
            state.user = null
        },
        [logout.fulfilled] : (state,action) =>{
            state.isLoggedIn = false;
            state.user = null;
        }
    }
})

export default authSlice.reducer;