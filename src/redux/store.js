import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './features/cart/cartSlice'
import ModalReducer from './features/modal/modalSlice'
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import authReducer from './features/auth/authSlice'
import messageReducer from './features/message/messageSlice'


const persistConfig = {
  key: 'root',
  storage,
}

const reducer = {
  cart : CartReducer,
  modal: ModalReducer,
  auth: authReducer,
  message: messageReducer
}


const persistedReducer = persistReducer(persistConfig, reducer)



export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

console.log(store.getState())

export const persistor = persistStore(store)



