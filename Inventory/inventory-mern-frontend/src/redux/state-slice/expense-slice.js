import {createSlice} from "@reduxjs/toolkit";
export const expenseSlice=createSlice({
    name:'expense',
    initialState:{
        List:[],
        ListTotal:0,
    },
    reducers:{
        SetExpenseList:(state,action)=>{
            state.List=action.payload
        },
        SetExpenseListTotal:(state,action)=>{
            state.ListTotal=action.payload
        }
    }
})

export  const {SetExpenseList,SetExpenseListTotal}=expenseSlice.actions;
export default  expenseSlice.reducer;