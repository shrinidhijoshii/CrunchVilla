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

export default cartSlice.reducer;

// here state refers to the initialState and it always represents previous value it contained
//action refers to the action to be done on state
// action.payload will have data sent from the outside
// reducer functions never returns anyting , they will just take the previous state & modify it
