import React from 'react';
import './home.css';
import logo from './logo.jpg';

const Home=()=>(<>
    <div id="unibackground">
        <img src={logo} alt="Logo" id="smlogo" />
        <h2 id="smwelcome">Welcome to Student Meet</h2>

    </div>
    <div id="aboutsm">
        <h1 id="smheading">About Student Meet</h1>

    </div>
    </>
)
export default Home;

