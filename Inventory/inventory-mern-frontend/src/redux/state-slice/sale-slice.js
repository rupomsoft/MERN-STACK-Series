import {createSlice} from "@reduxjs/toolkit";
export const saleSlice=createSlice({
    name:'sale',
    initialState:{
        List:[],
        ListTotal:0,
    },
    reducers:{
        SetSaleList:(state,action)=>{
            state.List=action.payload
        },
        SetSaleListTotal:(state,action)=>{
            state.ListTotal=action.payload
        }
    }
})

export  const {SetSaleList,SetSaleListTotal}=saleSlice.actions;
export default  saleSlice.reducer;