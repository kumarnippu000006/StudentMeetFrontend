import react from 'react';
// import './About.css';
import React, { Component } from 'react';
import myImg from './nk.jpg';
import akImg from './akhilesh.jpg';
import otImg from './a4.jpg';
import manoImg from './mano.jpg';
import sonuImg from './sonu.jpg';


const About=()=>  {

  
        
        
           const names=[{name:"Akhilesh Swaroop Gupta",email:"akhileshkiit2016@gmail.com",img:akImg,contact:""},
            {name:"Sunil Kumar Sharma",email:"sunilrk.one@gmail.com",img:otImg,contact:""},
            {name:"Nippu Kumar",email:"kumarnippu000006@gmail.com",img:myImg,contact:"7009621792"},
            {name:"Vikash kumar Yadav",email:"vikashyadav9120465730@gmail.com",img:otImg,contact:""},
            {name:"Manoj Kumar Chaudhary",email:"manojchaudhary52623@gmail.com",img:manoImg,contact:""}
        ]
        
    
       
    
   





   

        
        return (
            <div className="row">
                     {names.map((oName,i) =>(
                         
                         <div className="card col-md-4" style={{width:'18rem'}} key={i}>
                         <img src={oName.img} class="rounded-circle" alt="Cinque Terre" width="120" height="150" 
                          style={{marginLeft:'100px'}} /> 
                         <div className="card-body">
                           <h5 className="card-title" style={{textAlign:'center'}}>{oName.name}</h5>
                           <p className="card-text" style={{textAlign:'center'}}>{oName.email}</p>
                           <p className="card-text" style={{textAlign:'center'}}>Contact Number</p>
                           <p className="card-text" style={{textAlign:'center'}}>description........</p>
                           <a href="#" class="btn btn-primary" style={{textAlign:'center',marginLeft:'80px'}}>View Profile</a>
                         </div></div>
                      


                     ))}
                 </div>
        );
    
};

export default About;
