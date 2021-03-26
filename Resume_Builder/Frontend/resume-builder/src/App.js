import React, { Component } from 'react';
import firebaseApp from "./firebase/firebaseConfig";
import Navbar from "./Components/Navbar/navbar";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import About from './Components/About/About';
import Templates from './Components/Templates/Templates';
import Profile from './Components/Profile/Profile';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';

class App extends Component {
  state = {
      isAuth : true,
      user : null
    }


    login = () =>{
        //login to firebase

    }


    logout = () =>{
      firebaseApp.auth().signOut().then( obj=>{
        console.log("Signed out");
        this.setState({
          isAuth : false
        })
      })
    }

  componentDidMount(){
    firebaseApp.auth().onAuthStateChanged( function(userInfo){
      if(userInfo){
        if(!this.state.isAuth){
          this.setState({
            isAuth : true,
            user : userInfo.id
          })
        }
      }else{
        this.setState({
          isAuth : false,
          user : null
        })
      }
    })
  }


  render() { 
    let {isAuth} = this.state;
    return ( 
      <Router>
        <div className="App">
        <Navbar isAuth={isAuth} logout={this.logout} ></Navbar>    
          <Switch>
          <Route path="/" exact>
          <LandingPage></LandingPage>
          </Route>

          <Route path="/about" exact>
          <About></About>
          </Route>

          <Route path="/templates" exact>
            { isAuth ? (<Templates></Templates>) : ( <Redirect to="/login"></Redirect> )}
          </Route>
          
          <Route path="/profile" exact>
          { isAuth ? (<Profile></Profile>) : ( <Redirect to="/login"></Redirect> )}
          </Route>

          <Route path="/signup" exact>
          { isAuth ? ( <Redirect to="/"></Redirect> ) : (<SignUp></SignUp>) }
          </Route>

          <Route path="/signin" exact>
          { isAuth ? ( <Redirect to="/"></Redirect> ) : (<SignIn login={this.login} ></SignIn>) }
          </Route>
          </Switch> p
        </div>
      </Router>
    );
  }
}
 
export default App;