import { createSlice } from "@reduxjs/toolkit";



const addItemToCart = (cartItems, cartItemToAdd) => {
   const existingCartItem = cartItems.find(
      (cartItem) => cartItem.title === cartItemToAdd.title && cartItem.ChoosedColor === cartItemToAdd.ChoosedColor && cartItem.ChoosedSize === cartItemToAdd.ChoosedSize
   );

   if (existingCartItem) {
      return cartItems.map((cartItem) =>
         cartItem.title === cartItemToAdd.title && cartItem.ChoosedColor === cartItemToAdd.ChoosedColor && cartItem.ChoosedSize === cartItemToAdd.ChoosedSize
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
      );
   }

   return [...cartItems, { ...cartItemToAdd, quantity: 1, ChoosedColor: cartItemToAdd.ChoosedColor, ChoosedSize: cartItemToAdd.ChoosedSize }];
};



export const cartSlice = createSlice({
   name: "cart",
   initialState: {
      items: []
   },
   reducers: {
      addToBasket: (state, action) => {
         state.items = addItemToCart(state.items, action.payload);
      },
      plusItem: (state, action) => {
         [...state.items, (state.items[action.payload].quantity += 1)];
      },
      minusItem: (state, action) => {
         [...state.items, (state.items[action.payload].quantity -= 1)];
      },
   }
})


export const {
   addToBasket,
   plusItem,
   minusItem
} = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice

export default cartSlice.reducer;