import {createSlice} from "@reduxjs/toolkit";
export const customerSlice=createSlice({
    name:'customer',
    initialState:{
        Total:0,
        List:[]
    },
    reducers:{
        SetTotal:(state,action)=>{
            state.Total=action.payload
        },
        SetList:(state,action)=>{
            state.List=action.payload
        }
    }
})
export  const {SetTotal,SetList}=customerSlice.actions;
export default  customerSlice.reducer;