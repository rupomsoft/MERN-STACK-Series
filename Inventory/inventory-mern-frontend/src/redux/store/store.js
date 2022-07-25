import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../state-slice/settings/settings-slice";
import profileReducer from "../state-slice/users/profile-slice";
export default configureStore({
    reducer:{
        settings:settingsReducer,
        profile:profileReducer
    }
})