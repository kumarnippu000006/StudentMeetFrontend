import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

// import './index.css';
import App from './App.jsx';
import App2 from './signup.jsx';
import MyRouter from './MyRouter.jsx';
import Error from './Error';
import Profile from './user/Profile'
 
ReactDOM.render(
  <>
   {/* <App3></App3> */}
  <BrowserRouter>
  <MyRouter />
    </BrowserRouter>
  
  </>
 ,
  document.getElementById("root")
);
