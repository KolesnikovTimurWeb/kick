import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import wishListSlice from "./slices/wishListSlice";

export default configureStore({
   reducer: {
      cart: cartSlice,
      wishList: wishListSlice,
   }
})