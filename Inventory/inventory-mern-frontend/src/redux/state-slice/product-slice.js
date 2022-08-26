import {createSlice} from "@reduxjs/toolkit";
export const productSlice=createSlice({
    name:'product',
    initialState:{
        List:[]
    },
    reducers:{
        SetList:(state,action)=>{
            state.List=action.payload
        }
    }
})

export  const {SetList}=productSlice.actions;
export default  productSlice.reducer;