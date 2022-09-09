import {createSlice} from "@reduxjs/toolkit";
export const supplierSlice=createSlice({
    name:'supplier',
    initialState:{
        List:[],
        ListTotal:0,
    },
    reducers:{
        SetSupplierList:(state,action)=>{
            state.List=action.payload
        },
        SetSupplierListTotal:(state,action)=>{
            state.ListTotal=action.payload
        }
    }
})

export  const {SetSupplierList,SetSupplierListTotal}=supplierSlice.actions;
export default  supplierSlice.reducer;