import firebaseApp from './firebase/firebaseConfig';
import React, { Component } from 'react';

class App extends Component {
  state = {  }

  componentDidMount(){
    //API calling
    //get all documents
    // firebaseApp.db.collection("resumes").get().then( (alldocs) =>{
    //     alldocs.forEach((doc) =>{
    //       console.log(doc.id);
    //       console.log(doc.data());
    //     })
    // })

    firebaseApp.db.collection("resumes").doc("FyhazWj1CyQUlvcbj8aG").get().then( (myDoc) =>{
        console.log(myDoc.data());
    })




  }
  render() { 
    return ( <h1>Hello from App</h1> );
  }
}

export default App;
