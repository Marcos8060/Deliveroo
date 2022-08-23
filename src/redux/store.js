import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './features/cart/cartSlice'
import ModalReducer from './features/modal/ModalSlice'
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, CartReducer, ModalReducer)



export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

console.log(store.getState())

export const persistor = persistStore(store)



