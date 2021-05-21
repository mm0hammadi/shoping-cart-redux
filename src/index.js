import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import store from "./redux/store";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
