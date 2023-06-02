import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    audio:true
};

export const invAudioDeliveryModeSlice= createSlice({
    name:"audioDeliveryMode",
    initialState,
    reducers:{
        updateInvAudioDelivery:(state, action)=>{
            state.audio = action.payload;
        },
        
    },
});


export const {updateInvAudioDelivery}= invAudioDeliveryModeSlice.actions;

export default invAudioDeliveryModeSlice.reducer;
