import React from 'react';
import './login.css';
function App1() {


	function check()
		{
			var userName=document.getElementById('name').value;
			
			var pass=document.getElementById('pass').value;
			
			if(userName=="")
			{
				alert("Please Enter your UserName or Email-id");
			}
			else if(userName.length<=2)
			{
				alert("UserName should be at least 3 character");
			}
			else if(!isNaN(userName))
			{
				alert("please enter valid UserName or Email-id");
			}
			else if(pass=="")
			{
				alert("Please Enter your password");
			}
			else if(pass.length<=8)
			{
				alert("Password should be at least 8 character");
			}

			
			
			
		} 




  return (
    <div className="App1">
	
      <div class="nkimg1">
	  
	  
		<div class="centerdiv1">
			<h2 className="logHeading">User login</h2>
			<form>
				<div>
					<input type="text" class="inputbox" id="name" placeholder="Username"></input>
				</div>
				<br />
				<div>
					<input type="text" class="inputbox" id="pass" placeholder="Password"></input>
				</div>
				<br />
				<div>
					<button type="submit" onClick={check} >Login</button>
				</div>
			</form>
      <br />
			
			<div class="forgot-section">
				<h4>Forgot Password?</h4>
			</div>
			
		</div>
	</div>

    </div>

	
  );
}



export default App1;
