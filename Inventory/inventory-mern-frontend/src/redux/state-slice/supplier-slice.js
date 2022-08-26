import {createSlice} from "@reduxjs/toolkit";
export const supplierSlice=createSlice({
    name:'supplier',
    initialState:{
        List:[]
    },
    reducers:{
        SetList:(state,action)=>{
            state.List=action.payload
        }
    }
})

export  const {SetList}=supplierSlice.actions;
export default  supplierSlice.reducer;