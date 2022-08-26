import {createSlice} from "@reduxjs/toolkit";
export const brandSlice=createSlice({
    name:'brand',
    initialState:{
        List:[]
    },
    reducers:{
        SetList:(state,action)=>{
            state.List=action.payload
        }
    }
})


export  const {SetList}=brandSlice.actions;
export default  brandSlice.reducer;