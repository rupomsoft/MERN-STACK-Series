import {createSlice} from "@reduxjs/toolkit";
export const reportSlice=createSlice({
    name:'report',
    initialState:{
        List:[]
    },
    reducers:{
        SetList:(state,action)=>{
            state.List=action.payload
        }
    }
})

export  const {SetList}=reportSlice.actions;
export default  reportSlice.reducer;