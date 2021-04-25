import react from 'react';
// import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import './App.css';

const Menu =()=> {
    return (<>


<div className="App">
      <header>
		<nav class="navbar">
			<ul>
				<li><a href="/home">Home</a></li>
				<li><a href="/about">About us</a></li>
				<li><a href="/services">Services</a></li>
				<li><a href="/contact">ContactUs</a></li>
				<li><a href="/login" class="login">Login</a></li>
				<li><a href="/signup" class="signup">Signup</a></li>
        <li><a href="/post" class="signup">Create Post</a></li>

			</ul>
		</nav>
	</header>
    </div>






     {/* <Link to="/about">AboutUs</Link>
    <Link to="/contact">ContactUs</Link>  */}
       {/*  <a href="/about">About us</a>
        <a href="/contact">ContactUs</a> */}

        {/* https://reactrouter.com/web/api/NavLink */}

        {/* <button> <NavLink  activeStyle={{
    fontWeight: "bold",
    color: "red",fontSize: 20,margin:30
  }}  exact activeClassName="active-class" to="/about">AboutUs</NavLink ></button>
   <button ><NavLink   activeStyle={{
    fontWeight: "bold",
    color: "red",fontSize: 20,textAlign: "center",margin:30
  }} exact activeClassName="active-class" to="/contact">ContactUs</NavLink ></button> */}
      
    </>);

};
export default Menu;