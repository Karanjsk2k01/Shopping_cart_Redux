import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
  name: 'cartItem',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem(state, action) {
      let item = action.payload;
      let existingItem = state.items.find(item => item.id === item.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: item.id,
          price: item.price,
          totalPrice: item.price,
          title: item.title,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += item.price;
      }
    },
    removeItem(state, action) {
      let id = action.payload;
      let existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    }
  }
});

export const cartDetailsActions = addToCartSlice.actions;
export default addToCartSlice;