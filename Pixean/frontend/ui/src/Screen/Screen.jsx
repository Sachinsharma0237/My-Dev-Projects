import React, { Component } from 'react';
import './Screen';
import axios from 'axios';
class Screen extends Component {
    state = { 
        post:{}
    
    }
    componentDidMount(){
        
    } 

    render() { 
        return ( <div className="screen">
            <div className="user-photo">
            </div>
        </div> );

    }
}
 
export default Screen;  