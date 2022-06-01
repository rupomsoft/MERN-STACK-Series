import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./assets/css/bootstrap.css";
import "./assets/css/animate.min.css";
import "./assets/css/style.css";
import App from "./App";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App/>
  </StrictMode>,
  rootElement
);
