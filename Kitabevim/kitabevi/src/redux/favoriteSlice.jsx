import { createSlice } from "@reduxjs/toolkit";

const favoriteInitialState = {
  items: []

};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: favoriteInitialState,
  reducers: {
    addToFavorites: (state, action) => {
      if (!state.items.find((item) => item.id === action.payload.id)) {
        state.items.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    resetFavorites : (state)=>{
      state.items=[];
    }
  },
});

export const { addToFavorites, removeFromFavorites, resetFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;














  