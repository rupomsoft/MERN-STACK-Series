import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../state-slice/settings-slice";
import taskReducer from "../state-slice/task-slice";
import summaryReducer from "../state-slice/summary-slice";
import profileReducer from "../state-slice/profile-slice";

export default configureStore({
    reducer:{settings:settingsReducer, task:taskReducer,summary:summaryReducer,profile:profileReducer}
})