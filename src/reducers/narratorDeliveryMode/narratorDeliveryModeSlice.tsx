import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    page:"Intro"
};

export const narratorDeliveryModeSlice= createSlice({
    name:"narratorDeliveryMode",
    initialState,
    reducers:{
        updatePage:(state, action)=>{
            state.page = action.payload;
        },
        
    },
});


export const {updatePage}= narratorDeliveryModeSlice.actions;

export default narratorDeliveryModeSlice.reducer;
