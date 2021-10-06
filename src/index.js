import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./reducers";
import { Provider } from "react-redux";

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
