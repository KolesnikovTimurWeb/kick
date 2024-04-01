import { createSlice } from "@reduxjs/toolkit";




export const cartSlice = createSlice({
   name: "cart",
   initialState: {
      value: 0
   },
   reducers: {
      addToBasket: (state, action) => {
         state.value += 1;
      },
   }
})


export const {
   addToBasket,
} = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice

export default cartSlice.reducer;