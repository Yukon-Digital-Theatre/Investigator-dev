import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    page:"Intro"
};

export const textDeliveryModeSlice= createSlice({
    name:"textDeliveryMode",
    initialState,
    reducers:{
        updatePage:(state, action)=>{
            state.page = action.payload;
        },
        
    },
});


export const {updatePage}= textDeliveryModeSlice.actions;

export default textDeliveryModeSlice.reducer;
