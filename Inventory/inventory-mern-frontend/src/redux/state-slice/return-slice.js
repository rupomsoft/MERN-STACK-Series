import {createSlice} from "@reduxjs/toolkit";
export const returnSlice=createSlice({
    name:'return',
    initialState:{
        List:[],
        ListTotal:0,
        CustomerDropDown:[],
        ProductDropDown:[],
        ReturnFormValue:{
            CustomerID:"",
            VatTax:"",
            Discount:"",
            OtherCost:"",
            ShippingCost:"",
            GrandTotal:"",
            Note:"",
        },
        ReturnItemList:[],
    },
    reducers:{
        SetReturnList:(state,action)=>{
            state.List=action.payload
        },
        SetReturnListTotal:(state,action)=>{
            state.ListTotal=action.payload
        },
        SetCustomerDropDown:(state,action)=>{
            state.CustomerDropDown=action.payload
        },
        SetProductDropDown:(state,action)=>{
            state.ProductDropDown=action.payload
        },
        OnChangeReturnInput:(state,action)=>{
            state.ReturnFormValue[`${action.payload.Name}`]=action.payload.Value;
        },
        SetReturnItemList:(state,action)=>{
            state.ReturnItemList.push(action.payload)
        },
        RemoveReturnItem:(state,action)=>{
            state.ReturnItemList.splice(action.payload,1)
        },
    }
})

export  const {
    SetReturnList,
    SetReturnListTotal,
    SetCustomerDropDown,
    SetProductDropDown,
    OnChangeReturnInput,
    SetReturnItemList,
    RemoveReturnItem,
}=returnSlice.actions;
export default  returnSlice.reducer;