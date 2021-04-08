import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

// import './index.css';
import App3 from './App3.jsx';
import App1 from './login.jsx';
import App2 from './signup.jsx';
import App4 from './App4.jsx';

 
ReactDOM.render(
  <>
   {/* <App3></App3> */}
  <BrowserRouter>
  <App4></App4>
    </BrowserRouter>
  
  </>
 ,
  document.getElementById("root")
);
