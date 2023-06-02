import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    text:true
};

export const investigatorDeliveryModeSlice= createSlice({
    name:"investigatorDeliveryMode",
    initialState,
    reducers:{
        updateInvTextDelivery:(state, action)=>{
            state.text = action.payload;
        },
        
    },
});


export const {updateInvTextDelivery}= investigatorDeliveryModeSlice.actions;

export default investigatorDeliveryModeSlice.reducer;
