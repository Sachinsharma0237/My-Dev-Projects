import React, { Component } from 'react';
import "./navbar.css";
class Navbar extends Component {
    state = {  }
    render() { 
        return ( <div className="navbar">
            <div className="logo"></div>
            {this.props.isAuth ? 
                (<div className="navlinks">
                <ul>
                    <li><a href="/templates" > Templates </a></li>
                    <li><a href="/about" > About </a></li>
                    <li><a href="/profile" > Profile </a></li>
                    <li><a href="/logout" > Logout </a></li>
                </ul>
            </div>) :
           (<div className="navlinks">
           <ul>
               <li><a href="/about" > About </a></li>
               <li><a href="/signup" > Signup </a></li>
               <li><a href="/signin" > Signin </a></li>
           </ul>
       </div>)
           }
        </div> );
    }
}
 
export default Navbar;