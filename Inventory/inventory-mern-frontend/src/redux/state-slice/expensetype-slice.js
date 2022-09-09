import {createSlice} from "@reduxjs/toolkit";
export const expensetypeSlice=createSlice({
    name:'expensetype',
    initialState:{
        List:[],
        ListTotal:0,
    },
    reducers:{
        SetExpenseTypeList:(state,action)=>{
            state.List=action.payload
        },
        SetExpenseTypeListTotal:(state,action)=>{
            state.ListTotal=action.payload
        }
    }
})

export  const {SetExpenseTypeList,SetExpenseTypeListTotal}=expensetypeSlice.actions;
export default  expensetypeSlice.reducer;