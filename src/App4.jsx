import react from 'react';
import {Route,Switch} from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Error from './Error.jsx';
import Menu from './Menu.jsx';
import Login from './login.jsx';
import Signup from './signup.jsx';
import ShowPost from './ShowPost';
import CreatePost from './CreatePost';
import Home from './home/Home';
import GoTo from './home/GoTo';


const App4 =() => {
    return(
        <>
        <Menu></Menu>
        <GoTo></GoTo>
           <switch>
           <Route exact path="/home" component={Home} />
               <Route exact path="/about" component={About} />
               <Route exact path="/contact" component={Contact} />
               <Route exact path="/login" component={Login} />
               <Route exact path="/signup" component={Signup} />
               <Route exact path="/post" component={CreatePost} />
               {/* <Route exact path="/home" component={Home} /> */}
               {/* <Route exact path="/services" component={} /> */}
               {/* <Route  component={Error} /> */}

           </switch>
        </>
    )
};
export default App4;