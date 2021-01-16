import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./containers/App";
import "./index.css";
//REDUX
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import allReducers from "./store/reducer";

//MIDDLEWARES
//Local middlewares
import logger from "./middlewares/logger";
//middlewares
import thunk from "redux-thunk";
// import promise from "redux-promise";
// import createLogger from "redux-logger";

//FOR TESTING JAVASCRIPT CODES
require("./next-generation-js-code");

//
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//STORE INITIALIZATION
const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(logger, thunk))
);
// const logger = createLogger();
// const store = createStore(allReducers, applyMiddleware(thunk, promise, logger));

//AXIOS DEFUALTS
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
// axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
// axios.defaults.headers.post["Content-Type"] = "apllication/json";
//
axios.interceptors.request.use(
  requestConfig => {
    console.log(requestConfig);
    //u can Edit th requestConfig before returning em
    return requestConfig;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);
//
axios.interceptors.response.use(
  res => {
    console.log(res);
    return res;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

//RENDER TO DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
//install redux devTools extension for chrome

//NEW CODE FOR : Udemy - react-the-complete-guide-incl-redux
// <Provider store={store}>
//   <AllComponents />
// </Provider>
