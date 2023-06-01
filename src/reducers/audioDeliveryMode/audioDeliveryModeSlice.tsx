import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    page:"Intro"
};

export const audioDeliveryModeSlice= createSlice({
    name:"audioDeliveryMode",
    initialState,
    reducers:{
        updatePage:(state, action)=>{
            state.page = action.payload;
        },
        
    },
});


export const {updatePage}= audioDeliveryModeSlice.actions;

export default audioDeliveryModeSlice.reducer;
