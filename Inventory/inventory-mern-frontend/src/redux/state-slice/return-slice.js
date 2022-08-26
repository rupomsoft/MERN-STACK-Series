import {createSlice} from "@reduxjs/toolkit";
export const returnSlice=createSlice({
    name:'return',
    initialState:{
        List:[]
    },
    reducers:{
        SetList:(state,action)=>{
            state.List=action.payload
        }
    }
})

export  const {SetList}=returnSlice.actions;
export default  returnSlice.reducer;