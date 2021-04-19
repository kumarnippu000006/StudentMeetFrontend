import React from 'react';
import './signup.css';
function App2() {


	function check()
		{
			var name=document.getElementById('name').value;
			
			var pass=document.getElementById('pass').value;
			var cpass=document.getElementById('cpass').value;
			var email=document.getElementById('email').value;
			var cname=document.getElementById('cname').value;
			var bname=document.getElementById('bname').value;
			var cnub=document.getElementById('cnub').value;
			
			if(name=="")
			{
				alert("Please Enter your Name");
			}
			else if(name.length<=2)
			{
				alert("Name should be at least 3 character");
			}
			else if(!isNaN(name))
			{
				alert("please enter valid Name");
			}
			else if(pass=="")
			{
				alert("Please Enter  password");
			}
			else if(pass.length<=8)
			{
				alert("Password should be at least 8 character");
			}

			else if(pass=="")
			{
				alert("Please Enter  confirm password");
			}
			else if(pass.length<=8)
			{
				alert("Password should be at least 8 character");
			}

			else if(pass!=cpass){
				alert("Password and confirm password should be same");
			}


			// else if(isEmail(email)){
			// 	alert("Please enter valid Email id");
			// }



			else if(cname=="")
			{
				alert("Please Enter your College Name ");
			}
			else if(cname.length<=9)
			{
				alert("College Name should be at least 10 character");
			}
			else if(!isNaN(cname))
			{
				alert("please enter valid College Name");
			} 




			else if(bname=="")
			{
				alert("Please Enter your Branch Name ");
			}
			else if(bname.length<=9)
			{
				alert("Branch Name should be at least 10 character");
			}
			else if(!isNaN(bname))
			{
				alert("please enter valid Branch Name");
			} 




			else if(cnub=="")
			{
				alert("Please Enter your College Name ");
			}
			else if(cnub.length<=9)
			{
				alert("Contact Number should be  10 digit");
			}
			else if(isNaN(cnub))
			{
				alert("please enter valid Contact Number");
			} 
			
			
			
		} 




  return (
    <div className="App1">
	
    <div class="nkimg">
		<div class="centerdiv">
			<h2 className="signHeadig">Signup</h2>
			<form>
			<div>
					<input id="name" type="text" class="inputbox" placeholder="Name"></input>
				</div>
				<br />
				<div>
					<input id="email" type="text" class="inputbox" placeholder="Email-Id"></input>
				</div>
				<br />
				<div>
					<input id="pass" type="text" class="inputbox" placeholder="Password"></input>
				</div>
				<br />
				<div>
					<input id="cpass" type="text" class="inputbox" placeholder=" Confirm Password"></input>
				</div>
				<br />
				<div>
					<input id="cname" type="text" class="inputbox" placeholder="College Name"></input>
				</div>
				<br />
				<div>
					<input id="bname" type="text" class="inputbox" placeholder="Branch Name"></input>
				</div>
				<br />
				<div>
					<input id="cnub" type="text" class="inputbox" placeholder="Contact Number"></input>
				</div>
				
				<br />
				<div>
				
					<button type="submit" >Upload Your Id-Card
					
					</button>
					<input type="File" class="inputbox" ></input>
				</div>
				<br />
				<div>
					<button type="submit" onClick={check} >Signup</button>
				</div>
			</form>
			<br />
			
			
		</div>
	</div>

    </div>

	
  );
}



export default App2;
