import {createSlice} from "@reduxjs/toolkit";
export const categorySlice=createSlice({
    name:'category',
    initialState:{
        List:[],
        ListTotal:0,
    },
    reducers:{
        SetCategoryList:(state,action)=>{
            state.List=action.payload
        },
        SetCategoryListTotal:(state,action)=>{
            state.ListTotal=action.payload
        }
    }
})

export  const {SetCategoryList,SetCategoryListTotal}=categorySlice.actions;
export default  categorySlice.reducer;