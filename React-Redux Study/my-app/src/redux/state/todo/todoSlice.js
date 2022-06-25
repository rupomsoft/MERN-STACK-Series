import {createSlice} from "@reduxjs/toolkit";


export const todoSlice=createSlice({

    name:"todo",
    initialState:{
        value:[]
    },
    reducers:{
        AddTodo:(state,action)=>{
            state.value.push(action.payload)
        },
        RemoveTodo:(state,action)=>{
            state.value.splice(action.payload,1)
        },
        EditTodo:(state,action)=>{
            //{index:1,task:"To do name"}
            state.value.splice(action.payload['index'],1,action.payload['task'])
        }
    }

})

export  const {AddTodo,RemoveTodo,EditTodo}=todoSlice.actions;
export default todoSlice.reducer;