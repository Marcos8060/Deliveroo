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
                itemInCart.quantity++;
            }else{
            state.cartItems = [...state.cartItems, action.payload]
             }
        },
        // clearCart
        clearCart:(state)=>{
            state.cartItems = []
        },
        // removeItem
        removeItem:(state,action) =>{
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        }
    }
})

console.log(cartSlice);

export const { addToCart, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;