import {createSlice} from "@reduxjs/toolkit";
export const reportSlice=createSlice({
    name:'report',
    initialState:{
        SalesByDateList:[],
        ExpensesByDateList:[],
        PurchaseByDateList:[],
        ReturnByDateList:[]
    },
    reducers:{
        SetSalesByDateList:(state,action)=>{
            state.SalesByDateList=action.payload
        },
        SetExpensesByDateList:(state,action)=>{
            state.ExpensesByDateList=action.payload
        },
        SetPurchaseByDateList:(state,action)=>{
            state.PurchaseByDateList=action.payload
        },
        SetReturnByDateList:(state,action)=>{
            state.ReturnByDateList=action.payload
        }
    }
})

export  const {SetSalesByDateList,SetExpensesByDateList,SetPurchaseByDateList,SetReturnByDateList}=reportSlice.actions;
export default  reportSlice.reducer;