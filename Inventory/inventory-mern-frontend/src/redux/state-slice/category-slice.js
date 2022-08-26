import {createSlice} from "@reduxjs/toolkit";
export const categorySlice=createSlice({
    name:'category',
    initialState:{
        List:[]
    },
    reducers:{
        SetList:(state,action)=>{
            state.List=action.payload
        }
    }
})

export  const {SetList}=categorySlice.actions;
export default  categorySlice.reducer;