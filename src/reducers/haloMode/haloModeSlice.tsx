import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    mode:0
};

export const haloModeSlice= createSlice({
    name:"investigatorDeliveryMode",
    initialState,
    reducers:{
        updateHalo:(state, action)=>{
            state.mode = action.payload;
        },
        
    },
});


export const {updateHalo}= haloModeSlice.actions;

export default haloModeSlice.reducer;
