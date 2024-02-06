import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";


const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    cartVisible: false,
    notification: null
  },
  reducers: {
    toggleCart(state) {
      state.cartVisible = !state.cartVisible
    },
    showNotification(state, actions) {
      state.notification = {
        status: actions.payload.status,
        title: actions.payload.title,
        message: actions.payload.message
      }
    }
  }
})


export const cartSliceAction = cartSlice.actions

export default cartSlice;