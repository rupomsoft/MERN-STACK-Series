import {createSlice} from "@reduxjs/toolkit";
export const brandSlice=createSlice({
    name:'brand',
    initialState:{
        List:[],
        ListTotal:0,
        FormValue:{
            Name:""
        }
    },
    reducers:{
        SetBrandList:(state,action)=>{
            state.List=action.payload
        },
        SetBrandListTotal:(state,action)=>{
            state.ListTotal=action.payload
        },
        OnChangeBrandInput:(state,action)=>{
            state.FormValue[`${action.payload.Name}`]=action.payload.Value;
        },
        ResetBrandFormValue:(state,action)=>{
            Object.keys(state.FormValue).forEach((i) => state.FormValue[i] = "");
        }
    }
})

export  const {SetBrandList,SetBrandListTotal,OnChangeBrandInput,ResetBrandFormValue}=brandSlice.actions;
export default  brandSlice.reducer;