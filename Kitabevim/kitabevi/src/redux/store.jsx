import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favoritesReducer from "./favoriteSlice";
import usersReducer from "./userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites : favoritesReducer,
    user : usersReducer,
  },
});

export default store;
