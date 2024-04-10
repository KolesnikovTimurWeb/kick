import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import wishListSlice from "./slices/wishListSlice";
export const loadState = () => {
   try {
      const serializedState = localStorage.getItem("state");
      if (serializedState === null) {
         return undefined;
      }
      return JSON.parse(serializedState);
   } catch (err) {
      return undefined;
   }
};
export const store = configureStore({
   reducer: {
      cart: cartSlice,
      wishList: wishListSlice,
   },
   preloadedState: loadState(),
})

store.subscribe(() => {
   localStorage.setItem("state", JSON.stringify(store.getState()));
});
