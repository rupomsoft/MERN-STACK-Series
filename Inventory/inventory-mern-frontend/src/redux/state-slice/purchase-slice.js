import {createSlice} from "@reduxjs/toolkit";
export const purchaseSlice=createSlice({
    name:'purchase',
    initialState:{
        List:[],
        ListTotal:0,
    },
    reducers:{
        SetPurchaseList:(state,action)=>{
            state.List=action.payload
        },
        SetPurchaseListTotal:(state,action)=>{
            state.ListTotal=action.payload
        }
    }
})

export  const {SetPurchaseList,SetPurchaseListTotal}=purchaseSlice.actions;
export default  purchaseSlice.reducer;