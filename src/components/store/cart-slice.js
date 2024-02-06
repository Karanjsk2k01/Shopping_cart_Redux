import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    cartVisible: false,
  },
  reducers: {
    toggleCart(state) {
      state.cartVisible = !state.cartVisible
    }
  }
})


export const cartSliceAction = cartSlice.actions

export default cartSlice;