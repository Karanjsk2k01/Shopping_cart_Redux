import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import addToCartSlice from "./addToCart-slice";


const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartItems: addToCartSlice.reducer
  }
})


export default store;