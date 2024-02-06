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
      let existingItem = state.items.find(items => items.id === item.id);
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
    },
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
  }
});


export const cartDetailsActions = addToCartSlice.actions;
export default addToCartSlice;
