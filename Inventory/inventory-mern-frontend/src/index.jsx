import { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";
import store from "./redux/store/store";
import "./assets/css/bootstrap.css";
import "./assets/css/style.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
  </StrictMode>
);
