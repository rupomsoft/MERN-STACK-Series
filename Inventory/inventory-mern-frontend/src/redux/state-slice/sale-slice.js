import {createSlice} from "@reduxjs/toolkit";
export const saleSlice=createSlice({
    name:'sale',
    initialState:{
        List:[],
        ListTotal:0,
        CustomerDropDown:[],
        SaleFormValue:{
            CustomerID:"",
            VatTax:"",
            Discount:"",
            OtherCost:"",
            ShippingCost:"",
            GrandTotal:"",
            Note:"",
        },
        SaleItemList:[],
    },
    reducers:{
        SetSaleList:(state,action)=>{
            state.List=action.payload
        },
        SetSaleListTotal:(state,action)=>{
            state.ListTotal=action.payload
        },
        SetCustomerDropDown:(state,action)=>{
            state.CustomerDropDown=action.payload
        },
        OnChangeSaleInput:(state,action)=>{
            state.SaleFormValue[`${action.payload.Name}`]=action.payload.Value;
        },
    }
})

export  const {SetSaleList,SetSaleListTotal,SetCustomerDropDown}=saleSlice.actions;
export default  saleSlice.reducer;