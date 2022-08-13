import { createSlice } from "@reduxjs/toolkit/";


const initialState = {
    cartItems : [],
    amount: 0,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
            // checking if item already exists in cart
            if(itemInCart){
                alert('Item already in cart')
            }else{
                state.cartItems.push({ ...action.payload, quantity: 1})
            }
        }
    }
})

console.log(cartSlice);

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;