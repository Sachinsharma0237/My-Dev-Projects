import React, { Component } from 'react';
import "./Header.css"

class Header extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="header">
            <div className="logo">
                <img className="logo" src="logo.png" alt=""/>
            </div>
            <div className="nav-links">
                <ul>
                    <li className="home" ><a href="/home">Home</a></li>
                    <li className="profile" ><a href="/profile">Profile</a></li>
                </ul>
            </div>
        </div>
        );
    }
}
 
export default Header;