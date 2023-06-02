import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    audio:true
};

export const narratorAudioDeliveryModeSlice= createSlice({
    name:"narratorDeliveryMode",
    initialState,
    reducers:{
        updateNarratorAudioDelivery:(state, action)=>{
            state.audio = action.payload;
        },
        
    },
});


export const {updateNarratorAudioDelivery}= narratorAudioDeliveryModeSlice.actions;

export default narratorAudioDeliveryModeSlice.reducer;
