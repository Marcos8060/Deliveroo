import { createSlice } from "@reduxjs/toolkit/";


const initialState = {
    cartItems : []
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
        },
        // increaseQuantity
        increaseQuantity:(state,{payload})=>{
            const cartItem = state.cartItems.find((item)=> item.id === payload.id);
            cartItem.quantity = cartItem.quantity + 1;
        },
        decreaseQuantity:(state,{ payload})=>{
            const cartItem = state.cartItems.find((item)=> item.id === payload.id);
            cartItem.quantity = cartItem.quantity - 1;
        },
        // cartTotals
        cartTotals: (state)=>{
            let total = 0;
            state.cartItems.cartItems.forEach((item) =>{
                total += item.quantity * item.price;
            })
            return total;
        }
    }
})

console.log();

export const { addToCart, clearCart, removeItem, increaseQuantity,decreaseQuantity, cartTotals } = cartSlice.actions;

export default cartSlice.reducer;