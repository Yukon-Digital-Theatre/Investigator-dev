import { createSlice } from "@reduxjs/toolkit"


const initialState = {
     visited: false
};


export const wrapUpVisitedSlice= createSlice({
    name:"wrapUpVisited",
    initialState,
    reducers:{
        visit:(state)=>{
            state.visited = true;
        },
        reset:(state)=>{
            state.visited = false;
        },
    },
});


export const {visit,reset}= wrapUpVisitedSlice.actions;

export default wrapUpVisitedSlice.reducer;
