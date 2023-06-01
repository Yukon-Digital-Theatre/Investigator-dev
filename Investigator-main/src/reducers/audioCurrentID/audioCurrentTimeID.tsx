import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: 1000
};

export const audioCurrentIDSlice= createSlice({
    name:"audioCurrentID",
    initialState,
    reducers:{
        updateID:(state, action)=>{
            state.id = action.payload;
        },
        
    },
});


export const {updateID}= audioCurrentIDSlice.actions;

export default audioCurrentIDSlice.reducer;
