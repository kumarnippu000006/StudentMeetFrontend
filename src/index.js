import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

// import './index.css';
import App1 from './login.jsx';
import App2 from './signup.jsx';
import App4 from './App4.jsx';
import Post from './Post'
import Error from './Error';
 
ReactDOM.render(
  <>
   {/* <App3></App3> */}
  <BrowserRouter>
  <Error/>
    </BrowserRouter>
  
  </>
 ,
  document.getElementById("root")
);
