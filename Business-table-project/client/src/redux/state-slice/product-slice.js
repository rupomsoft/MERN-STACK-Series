import {createSlice} from "@reduxjs/toolkit";
export const productSlice=createSlice({
    name:'product',
    initialState:{
        Total:0,
        ALLProduct:[],
    },
    reducers:{
        SetTotal:(state,action)=>{
            state.Total=action.payload
        },
        SetALLProduct:(state,action)=>{
            state.ALLProduct=action.payload
        }
    }
})
export  const {SetTotal,SetALLProduct}=productSlice.actions;
export default  productSlice.reducer;
