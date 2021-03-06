import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./navbar.css";
class Navbar extends Component {
    state = {  }
    render() { 
        return (  
            <div className="navbar">
            <div className="logo"></div>
            {
                this.props.isAuth? (
                    <div className="navlinks">
                <ul>
                            <li>
                                <Link to="/templates">Templates</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link onClick ={this.props.logout} >Logout</Link>
                            </li>
                </ul>
                    </div>
                ) :
                (
                    <div className="navlinks">
           <ul>
               <li>
                    <Link to="/about" >About</Link>
               </li>
               <li>
                   <Link to="/signup">Signup</Link>
               </li>
               <li>
                    <Link to="/signin">Signin</Link>
               </li>
           </ul>
                    </div>   
                ) 
           }
            </div>
         )
    }
}
 
export default Navbar;