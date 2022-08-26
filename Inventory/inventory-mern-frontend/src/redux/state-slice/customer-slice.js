import {createSlice} from "@reduxjs/toolkit";
export const customerSlice=createSlice({
    name:'customer',
    initialState:{
        List:[]
    },
    reducers:{
        SetList:(state,action)=>{
            state.List=action.payload
        }
    }
})

export  const {SetList}=customerSlice.actions;
export default  customerSlice.reducer;