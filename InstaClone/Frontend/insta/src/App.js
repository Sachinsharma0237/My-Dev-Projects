import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Profile from './Components/Profile/Profile.jsx';
import Settings from './Components/Settings/Settings.jsx';
import axios from 'axios';
import uid from './uid';

class App extends Component {
  state = { 
    user:null
   }

  componentDidMount(){
    axios.get(`/api/user/${uid}`).then( obj =>{
        let user = obj.data.user;
        this.setState({
            user:user
        })
    } )
  } 



  render() { 
    let user = this.state.user;
    return (  
      <Router>    
      <Header/>
      { user ? 
      <div className="app">
      <Switch>
      <Route path="/" exact>
      <Home  user ={ user }/>
      </Route>

      <Route path="/profile" exact>
      <Profile user ={ user }/>
      </Route>

      <Route path="/settings" exact>
      <Settings user ={ user }/>
      </Route>
      <Route path ="*" exact>
        <Redirect to="/" ></Redirect>
      <Home/>
      </Route>
      </Switch>
      </div>
      :
      (<h1 style={{position:"absolute", top:"300px", left:"300px"}} >Loading.....</h1> )
      }
      </Router> );
  }
}
 
export default App;