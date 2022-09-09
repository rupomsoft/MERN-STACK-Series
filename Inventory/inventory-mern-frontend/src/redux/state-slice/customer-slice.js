import {createSlice} from "@reduxjs/toolkit";
export const customerSlice=createSlice({
    name:'customer',
    initialState:{
        List:[],
        ListTotal:0,
    },
    reducers:{
        SetCustomerList:(state,action)=>{
            state.List=action.payload
        },
        SetCustomerListTotal:(state,action)=>{
            state.ListTotal=action.payload
        }
    }
})

export  const {SetCustomerList,SetCustomerListTotal}=customerSlice.actions;
export default  customerSlice.reducer;