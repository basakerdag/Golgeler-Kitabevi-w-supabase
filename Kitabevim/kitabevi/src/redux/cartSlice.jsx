import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  items: [], 
};



const cartSlice = createSlice({
  name: "cart",
  initialState : cartInitialState, 
  reducers: {
    addToCart: (state, action) =>  {
      if (!state.items.find((item) => item.id === action.payload.id)) {
        state.items.push(action.payload); 
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id); 
    },
    resetCart :(state)=>{
      state.items=[];
    },
  },
});


export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;


export default cartSlice.reducer;
