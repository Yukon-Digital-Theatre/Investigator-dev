import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    voice:"female"
};

export const voicePreferenceSlice= createSlice({
    name:"narratorDeliveryMode",
    initialState,
    reducers:{
        updateVoicePreference:(state, action)=>{
            state.voice = action.payload;
        },
        
    },
});


export const {updateVoicePreference}= voicePreferenceSlice.actions;

export default voicePreferenceSlice.reducer;
