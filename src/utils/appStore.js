import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reduxslices/cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default appStore;
