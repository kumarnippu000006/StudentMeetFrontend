import react from 'react';
// import './About.css';
import React, { Component } from 'react';
import myImg from './nk.jpg';


class About extends Component {

    constructor() {
        super()
        this.state = {
            names:[{name:"Akhilesh Swaroop Gupta",email:"akhileshkiit2016@gmail.com"},
            {name:"Sunil Kumar Sharma",email:"sunilrk.one@gmail.com"},
            {name:"Nippu Kumar",email:"kumarnippu000006@gmail.com"},
            {name:"Vikash Yadav",email:"akhileshkiit2016@gmail.com"},
            {name:"Manoj Kumar Chaudhary",email:"akhileshkiit2016@gmail.com"}
        ]
        
        };
       
    }
   





    render() {

        const names=this.state.names;
        return (
            <div className="row">
                     {names.map((oName,i) =>(
                         
                         <div className="card col-md-4" style={{width:'18rem'}} key={i}>
                         <img src={myImg} class="rounded-circle" alt="Cinque Terre" width="120" height="150" 
                          style={{marginLeft:'100px'}} /> 
                         <div className="card-body">
                           <h5 className="card-title" style={{textAlign:'center'}}>{oName.name}</h5>
                           <p className="card-text" style={{textAlign:'center'}}>{oName.email}</p>
                           <p className="card-text" style={{textAlign:'center'}}>Contact Nmber</p>
                           <p className="card-text" style={{textAlign:'center'}}>description........</p>
                           <a href="#" class="btn btn-primary" style={{textAlign:'center',marginLeft:'80px'}}>View Profile</a>
                         </div></div>
                      


                     ))}
                 </div>
        );
    }
};

export default About;
