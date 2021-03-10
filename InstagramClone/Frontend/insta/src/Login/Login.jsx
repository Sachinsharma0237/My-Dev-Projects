import React, { Component } from 'react';
import "./Login.css";

class Login extends Component {
    state = {  }
    render() { 
        return ( <div className="login">
            <h1>Login</h1>
            <button onClick={this.props.login}>Login with Google+</button>
        </div> );
    }
}
 
export default Login;