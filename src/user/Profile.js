import React, { Component } from 'react';
import './profile.css';
import myImg from './images/a2.png';

class Profile extends Component {
    render() {
        return (
        <>
            <div className="first">

            <div className="second">
            <img src={myImg} class="rounded-circle" alt="Cinque Terre" width="120" height="150" 
                          style={{marginLeft:'180px',marginTop:'20px'}} />
            
            
            <h1 className="profile">Profile</h1>
            <h2 className="profile">UserName</h2>
            <h3 className="profile">Email</h3>
            <h3 className="profile">Contact Number</h3>
            <h3 className="profile">University Name</h3>
            </div>
            <div className="third">
            
            <div className="edit">
            <button type="button" className="bt1">Edit Profile</button>
            <button type="button" className="bt2">Delete Profile</button>
            
            </div>
            
            </div>
            </div>
            </>
        );
    }
}

export default Profile;