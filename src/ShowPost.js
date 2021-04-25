import React, { Component } from 'react';

class ShowPost extends Component {

    constructor() {
        super()
        this.state = {
            posts:["First Post Title title","Second Post title","Third Post title","Fourth Post title","Fifth Post title"
            ,"Sixth Post title","Seventh Post title","Eigth Post title","Ninth Post title","Tenth Post title","Eleventh Post title","Twelveth Post title","Thirtheen Post title"
            ,"Fourteen Post title","Fivteen Post title","Sixteen Post title","Seventeen Post title"
        ]
  
        }
    }

/*      isAuthenticated = () =>{
            if(typeof window == "undefined"){
                return false;
            }
        
            if(localStorage.getItem("user"))
            {
                return JSON.parse(localStorage.getItem("user"));
            }
            else{
                return false;
            }
        };


         posts = () => {
            return fetch(`http://localhost:8080/${uniId}/feed`, {
                method: "GET"
                
            })
                .then(response => {
                    return response.json();
                })
                .catch(err => console.log(err));
        };

        getPost=(uniId) => {
            const token =isAuthenticated().token;
            this.post(uniId)
            .then(data =>{
                if(data.error)
                {
                    console.log(data.error);
                }
                else{
                    this.setState({
                        posts:data
                    });
                    
                }
            });
        
        };


        componentDidMount() {
           
            const uniId = isAuthenticated().uniId;
          this.getPost(uniId);
        }
 */

    
    render() {
        const posts=this.state.posts;
        return (
            <div className="row">
                     {posts.map((post,i) =>(
                         
                         <div className="card col-md-4" style={{width:'18rem'}} key={i}>
                         
                         <div className="card-body">
                           <h5 className="card-title" style={{textAlign:'center'}}>{post}</h5>
                           <p className="card-text" style={{textAlign:'center'}}>Post Description</p>
                           
                           <p className="card-text" style={{textAlign:'center'}}>Post Detail</p>
                           <a href="#" class="btn btn-primary" style={{textAlign:'center',marginLeft:'80px'}}>Read More</a>
                         </div></div>
                      


                     ))}
                 </div>
        );
    }
}

export default ShowPost;