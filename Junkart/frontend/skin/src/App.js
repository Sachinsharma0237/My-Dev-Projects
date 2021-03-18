import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';


class App extends Component {
      state = { 
          name:"", 
          email:"", 
          age:"", 
          cheeks:"", 
          tZone:"", 
          skinConcerns:"", 
          allergic:"", 
          randomIssues:"" 
      }

      addUser = (e) =>{
        this.setState({
          
        })
      }
  render() { 
    return ( 
    <Router>
      <div className="app">
        <Header></Header>
        <Switch>
          <Route path="/" exact>
          <Body addUser={this.addUser}  ></Body>
          </Route>
          <Route path="/home" exact>
          <Body addUser={this.addUser}  ></Body>
          </Route>
          {/* <Route path="/profile" exact>
          <Profile userDetails={this.state.userDetails}  ></Profile>
          </Route> */}
          <Route path="*" exact>
          <Redirect to="/" ></Redirect>
          </Route>
        </Switch>
      </div>
    </Router> );
  }
}
 
export default App;