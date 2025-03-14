import { createSlice } from "@reduxjs/toolkit";

const userInitialState={
    items : [],
    loggedInUser: null, 
   
};

const userSlice = createSlice({
    name : 'user',
    initialState : userInitialState,
    reducers : {
        addToUsers : (state,action) => {
            state.items.push(action.payload);
        },
        removeFromUsers : (state,action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id); 
        },
        loginUser: (state, action) => {
          const { user } = action.payload; 
          state.loggedInUser = user; 
          state.items.push(user);
        },
        logoutUser: (state) => {
          state.loggedInUser = null;
        },
    
    },
});

export const {addToUsers, removeFromUsers, loginUser, logoutUser} = userSlice.actions;
export default  userSlice.reducer;
