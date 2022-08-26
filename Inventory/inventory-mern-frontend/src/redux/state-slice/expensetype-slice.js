import {createSlice} from "@reduxjs/toolkit";
export const expensetypeSlice=createSlice({
    name:'expensetype',
    initialState:{
        List:[]
    },
    reducers:{
        SetList:(state,action)=>{
            state.List=action.payload
        }
    }
})

export  const {SetList}=expensetypeSlice.actions;
export default  expensetypeSlice.reducer;