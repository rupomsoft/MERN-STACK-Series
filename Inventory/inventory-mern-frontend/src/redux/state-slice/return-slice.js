import {createSlice} from "@reduxjs/toolkit";
export const returnSlice=createSlice({
    name:'return',
    initialState:{
        List:[],
        ListTotal:0,
    },
    reducers:{
        SetReturnList:(state,action)=>{
            state.List=action.payload
        },
        SetReturnListTotal:(state,action)=>{
            state.ListTotal=action.payload
        }
    }
})

export  const {SetReturnList,SetReturnListTotal}=returnSlice.actions;
export default  returnSlice.reducer;