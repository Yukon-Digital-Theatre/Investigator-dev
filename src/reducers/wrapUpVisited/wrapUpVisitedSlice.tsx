import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    mode:false
};

export const wrapUpVisitedSlice= createSlice({
    name:"investigatorDeliveryMode",
    initialState,
    reducers:{
        updateWrapUpVisited:(state, action)=>{
            state.mode = action.payload;
        },
        
    },
});


export const {updateWrapUpVisited}= wrapUpVisitedSlice.actions;

export default wrapUpVisitedSlice.reducer;