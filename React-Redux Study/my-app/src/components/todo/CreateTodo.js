import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {AddTodo} from "../../redux/state/todo/todoSlice";

const CreateTodo = () => {

   const dispatch=useDispatch();
   const taskInput=useRef();

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    <input ref={taskInput} placeholder="Task Name" type="text" className="form-control"/>
                </div>
                <div className="col-md-2">
                    <button onClick={()=>dispatch(AddTodo(taskInput.current.value))} className="btn btn-primary">Add To Do</button>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;