import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Profile from './Components/Profile/Profile.jsx';
import Settings from './Components/Settings/Settings.jsx';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>    
      <div className="app">
        <Header/>
        <Switch>

        <Route path="/" exact>
        <Home/>
        </Route>

        <Route path="/profile" exact>
        <Profile/>
        </Route>

        <Route path="/settings" exact>
        <Settings/>
        </Route>
        <Route path ="*" exact>
          <Redirect to="/" ></Redirect>
        <Home/>
        </Route>

        </Switch>
      </div>
      </Router> );
  }
}
 
export default App;