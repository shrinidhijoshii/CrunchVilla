import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
  },
});


/*
 when createSlice is processed by the redux ,
 behid the scenes cartSlice will look like this

 cartSlice = {
    actions : {
        addItem,
        clearCart,
        removeItem
    },
    reducer: reducers
 }

 thats why we are exporting two things like this.
*/

// we are doing destrcturing here and then doing named export
export const { addItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

// here state refers to the initialState and it always represents previous value it contained
//action refers to the action to be done on state
// action.payload will have data sent from the outside
// reducer functions never returns anyting , they will just take the previous state & modify it
