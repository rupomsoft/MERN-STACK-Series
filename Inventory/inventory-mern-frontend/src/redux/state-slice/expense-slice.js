import {createSlice} from "@reduxjs/toolkit";
export const expenseSlice=createSlice({
    name:'expense',
    initialState:{
        List:[]
    },
    reducers:{
        SetList:(state,action)=>{
            state.List=action.payload
        }
    }
})

export  const {SetList}=expenseSlice.actions;
export default  expenseSlice.reducer;