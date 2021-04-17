import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
              <div className="container" style={{height:"100vh",width:"100%",margin:0,marginRight:0}}>
                 
                <form>
                <label className="text-muted" style={{}}>Create Your Post</label>
            
            <div className="form-group">
                <label className="text-muted">Post Title</label>
                <input
                    
                    type="text"
                    className="form-control"
                   
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Description</label>
                <textarea
                   
                    type="text"
                    className="form-control"
                    
                />
                

            </div>

           
        <select name="Tag" id="cars"  style={{display: "block",border:"none"}}>
        <option value="volvo">Select Tag..</option>
    <option value="volvo">Education</option>
    <option value="saab">Entertainment</option>
    <option value="opel">Extra-Curriculum Activity</option>
  
  </select>


            {/* <div className="form-group">
               
                <input
                    
                    type="file"
                    accept="image/*"
                    
                />
                 <label > Post Image</label>
                </div>
 */}
            <button
                
                className="btn btn-raised btn-primary"
            >
                Create Post
            </button>
        </form>
            </div>
        );
    }
}

export default Post;