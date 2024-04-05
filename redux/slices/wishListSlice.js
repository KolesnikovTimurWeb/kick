import { createSlice } from "@reduxjs/toolkit";



const addItemToCart = (cartItems, cartItemToAdd) => {
   const existingCartItem = cartItems.find(
      (cartItem) => cartItem.title === cartItemToAdd.title
   );

   if (existingCartItem) {
      return cartItems.map((cartItem) =>
         cartItem.title === cartItemToAdd.title
            ? { ...cartItem, liked: !cartItem.liked }
            : cartItem
      );
   }

   return [...cartItems, { ...cartItemToAdd, liked: true }];
};



export const wishListSlice = createSlice({
   name: "wishList",
   initialState: {
      items: []
   },
   reducers: {
      addToWishList: (state, action) => {
         state.items = addItemToCart(state.items, action.payload);
      },
      findItemWishList: (state, action) => {
         state.items = state.items.filter((item) => item.liked === true);
      },
      removeFromBasket: (state, action) => {
         state.items = state.items.filter((item) => item.ChoosedSize !== action.payload.ChoosedSize || item.ChoosedColor !== action.payload.ChoosedColor || item.title !== action.payload.title);
      },
   }
})


export const {
   addToWishList,
   findItemWishList,
   removeFromBasket
} = wishListSlice.actions;

// Selectors - This is how we pull information from the Global store slice

export default wishListSlice.reducer;