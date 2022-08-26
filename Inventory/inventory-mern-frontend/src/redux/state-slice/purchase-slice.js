import {createSlice} from "@reduxjs/toolkit";
export const purchaseSlice=createSlice({
    name:'purchase',
    initialState:{
        List:[]
    },
    reducers:{
        SetList:(state,action)=>{
            state.List=action.payload
        }
    }
})

export  const {SetList}=purchaseSlice.actions;
export default  purchaseSlice.reducer;