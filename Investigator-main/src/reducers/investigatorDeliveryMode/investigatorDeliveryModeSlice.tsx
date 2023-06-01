import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    page:"Intro"
};

export const investigatorDeliveryModeSlice= createSlice({
    name:"investigatorDeliveryMode",
    initialState,
    reducers:{
        updatePage:(state, action)=>{
            state.page = action.payload;
        },
        
    },
});


export const {updatePage}= investigatorDeliveryModeSlice.actions;

export default investigatorDeliveryModeSlice.reducer;
