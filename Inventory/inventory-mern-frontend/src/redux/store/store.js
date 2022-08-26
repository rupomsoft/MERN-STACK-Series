import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../state-slice/settings/settingsSlice";
import profileReducer from "../state-slice/users/profileSlice";
import dashboardReducer from "../state-slice/dashboard/dashboardSlice";
export default configureStore({
    reducer:{
        settings:settingsReducer,
        dashboard:dashboardReducer,
        profile:profileReducer
    }
})