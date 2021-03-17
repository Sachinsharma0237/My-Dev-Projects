import firebaseApp from './firebase/firebaseConfig';
import React, { Component } from 'react';
import Skin from './Components/Skin/skin1.jsx';
import Navbar from './Components/Navbar/navbar.jsx'
import Login from "./Components/Login/Login";
import Skin2 from "./Components/Skin/skin2.jsx";
class App extends Component {
  state = { 
    isAuth: true
   }

  componentDidMount(){
    //API calling
    //get all documents
    firebaseApp.firestore().collection("resumes").get().then( (alldocs) =>{
        alldocs.forEach((doc) =>{
          console.log(doc.id);
          console.log(doc.data());
        })
    })
    //Get single doc by Id
    firebaseApp.firestore().collection("resumes").doc("FyhazWj1CyQUlvcbj8aG").get().then( (myDoc) =>{
        console.log(myDoc.data());
    })

  }
  addData =()=>{
          
      firebaseApp.firestore().collection("resumes").doc("FyhazWj1CyQUlvcbj8aG").update({
          contactDetails : {
            name:"Sachin Sharma",
            Email:"Sachinsharma0237@gmail.com",
            Phone:"9540360365"
          },
          educationDetails : {
            CGPA:"10",
            College:"DITE",
            Degree:"B.Tech"
          },
          skin:"1"
      }).then( ()=>{
        console.log("Data set ho gya!!!");
      })
  }
  
  render() { 
    let { isAuth } = this.state;
    return ( 
      <div className="App" >
        <Skin2></Skin2>
        {/* <Skin></Skin> */}
      </div> 
    );
  }
}

export default App;
