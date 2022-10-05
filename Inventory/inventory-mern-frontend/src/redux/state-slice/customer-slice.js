import {createSlice} from "@reduxjs/toolkit";

export const customerSlice=createSlice({
    name:'customer',
    initialState:{
        List:[],
        ListTotal:0,
        FormValue:{
            CustomerName:"",
            Phone:"",
            Email:"",
            Address:""
        }
    },
    reducers:{
        SetCustomerList:(state,action)=>{
            state.List=action.payload
        },
        SetCustomerListTotal:(state,action)=>{
            state.ListTotal=action.payload
        },
        OnChangeCustomerInput:(state,action)=>{
            state.FormValue[`${action.payload.Name}`]=action.payload.Value;
        },
        ResetFormValue:(state,action)=>{
            Object.keys(state.FormValue).forEach((i) => state.FormValue[i] = "");
        }

    }
})

export  const {SetCustomerList,SetCustomerListTotal,OnChangeCustomerInput,ResetFormValue}=customerSlice.actions;
export default  customerSlice.reducer;