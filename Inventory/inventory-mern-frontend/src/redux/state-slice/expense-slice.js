import {createSlice} from "@reduxjs/toolkit";
export const expenseSlice=createSlice({
    name:'expense',
    initialState:{
        List:[],
        ListTotal:0,
        ExpenseTypeDropDown:[],
        FormValue:{
            TypeID:"",
            Amount:"",
            Note:""
        }
    },
    reducers:{
        SetExpenseList:(state,action)=>{
            state.List=action.payload
        },
        SetExpenseListTotal:(state,action)=>{
            state.ListTotal=action.payload
        },
        SetExpenseTypeDropDown:(state,action)=>{
            state.ExpenseTypeDropDown=action.payload
        },
        OnChangeExpenseInput:(state,action)=>{
            state.FormValue[`${action.payload.Name}`]=action.payload.Value;
        },
        ResetExpenseFormValue:(state,action)=>{
            Object.keys(state.FormValue).forEach((i) => state.FormValue[i] = "");
        }
    }
})

export  const {SetExpenseList,SetExpenseListTotal,OnChangeExpenseInput,SetExpenseTypeDropDown,ResetExpenseFormValue}=expenseSlice.actions;
export default  expenseSlice.reducer;