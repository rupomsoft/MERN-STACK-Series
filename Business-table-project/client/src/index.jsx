import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/css/bootstrap.css";
import "./assets/css/animate.min.css";
import "./assets/css/style.css";
import App from "./App";
import {Provider} from "react-redux";
import store from "./redux/store/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
