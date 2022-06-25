import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/css/app.css"
import "./assets/css/style.css"
import {Provider} from "react-redux";
import store from "./redux/store/store";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);
