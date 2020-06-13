import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.interceptors.request.use((requestconfig) => {
  console.log(requestconfig);
  // alert('request is sent');
  return requestconfig;
}, error => {
  console.log(error);
  return Promise.reject(error);
}
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    // alert('response received');

    return response;
  }, error => {
    console.log(error);

    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
