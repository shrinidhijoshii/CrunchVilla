import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    // put slice into the store
    reducer:{
        cart : cartSlice,
    }
});


/*
- reducer will take name of slice you defined in create slice as a key and
value will be created slice name eg , cart : cartSlice
- name refers to the name defined in createSlice api like this  "name: "cart"
- cartSlice is exported by default so it will contain all the reducers
*/

export default store;
