import { createSlice } from "@reduxjs/toolkit"


const initialState = {
     playing: true
};


export const playPauseSlice= createSlice({
    name:"playPause",
    initialState,
    reducers:{
        play:(state)=>{
            state.playing = true;
        },
        pause:(state)=>{
            state.playing = false;
        },
    },
});


export const {play,pause}= playPauseSlice.actions;

export default playPauseSlice.reducer;
