import {createSlice} from "@reduxjs/toolkit";
export const brandSlice=createSlice({
    name:'brand',
    initialState:{
        List:[],
        ListTotal:0,
    },
    reducers:{
        SetBrandList:(state,action)=>{
            state.List=action.payload
        },
        SetBrandListTotal:(state,action)=>{
            state.List=action.payload
        }
    }
})
export  const {SetBrandList}=brandSlice.actions;
export default  brandSlice.reducer;