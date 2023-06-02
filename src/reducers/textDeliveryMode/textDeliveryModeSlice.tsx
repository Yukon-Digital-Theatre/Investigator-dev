import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    text:true
};

export const textDeliveryModeSlice= createSlice({
    name:"textDeliveryMode",
    initialState,
    reducers:{
        updateTextDelivery:(state, action)=>{
            state.text = action.payload;
        },
        
    },
});


export const {updateTextDelivery}= textDeliveryModeSlice.actions;

export default textDeliveryModeSlice.reducer;
