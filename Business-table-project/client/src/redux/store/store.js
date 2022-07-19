import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../state-slice/product-slice";
import settingsReducer from "../state-slice/settings-slice";
export default configureStore({
    reducer:{
        settings:settingsReducer,
        product:productReducer,
    }
})