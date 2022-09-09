import {createSlice} from "@reduxjs/toolkit";
export const reportSlice=createSlice({
    name:'report',
    initialState:{
        List:[],
        ListTotal:0,
    },
    reducers:{
        SetReportList:(state,action)=>{
            state.List=action.payload
        },
        SetReportListTotal:(state,action)=>{
            state.ListTotal=action.payload
        }
    }
})

export  const {SetReportList,SetReportListTotal}=reportSlice.actions;
export default  reportSlice.reducer;