import {createSlice} from "@reduxjs/toolkit";
export const categorySlice=createSlice({
    name:'category',
    initialState:{
        List:[],
        ListTotal:0,
        FormValue:{
            Name:""
        }
    },
    reducers:{
        SetCategoryList:(state,action)=>{
            state.List=action.payload
        },
        SetCategoryListTotal:(state,action)=>{
            state.ListTotal=action.payload
        },
        OnChangeCategoryInput:(state,action)=>{
            state.FormValue[`${action.payload.Name}`]=action.payload.Value;
        },
        ResetCategoryFormValue:(state,action)=>{
            Object.keys(state.FormValue).forEach((i) => state.FormValue[i] = "");
        }
    }
})

export  const {SetCategoryList,SetCategoryListTotal,OnChangeCategoryInput,ResetCategoryFormValue}=categorySlice.actions;
export default  categorySlice.reducer;