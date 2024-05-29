import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../features/CounterSlice'


export const store = configureStore({
    reducer: {
        cart: CartReducer
    }
})