import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../state-slice/settings-slice";
export default configureStore({
    reducer:{
        settings:settingsReducer,
    }
})