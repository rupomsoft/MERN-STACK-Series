import {createSlice} from "@reduxjs/toolkit";
export const saleSlice=createSlice({
    name:'sale',
    initialState:{
        List:[]
    },
    reducers:{
        SetList:(state,action)=>{
            state.List=action.payload
        }
    }
})

export  const {SetList}=saleSlice.actions;
export default  saleSlice.reducer;