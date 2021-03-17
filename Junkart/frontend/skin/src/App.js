import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';


class App extends Component {
  state = { 

   }
  render() { 
    return ( <React.Fragment>
      <Header></Header>
      <Body></Body>
    </React.Fragment> );
  }
}
 
export default App;