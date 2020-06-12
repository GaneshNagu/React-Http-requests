import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.interceptors.request.use(
  (requestconfig) => {
    console.log(requestconfig);
    // alert('request is sent');
<<<<<<< HEAD
    return requestconfig;
  },
  (error) => {
    console.log(error);
=======
    return requestconfig
},error=>{
     console.log(error);
>>>>>>> bd100527727c03546aabe431b6ee1deb5160311f
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    // alert('response received');
<<<<<<< HEAD
    return response;
  },
  (error) => {
    console.log(error);
=======
    return response
},error=>{
     console.log(error);
>>>>>>> bd100527727c03546aabe431b6ee1deb5160311f
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
