import React, { Component } from 'react';
import axios from 'axios';
import './Home.css';
class Home extends Component {
    state = { 
        posts:[],
        userPhoto:""
     }
    fileInput = React.createRef();
    
     componentDidMount(){
        axios.get("/api/user").then( obj =>{
            let posts = obj.data.allPosts;
            let sortedPosts = posts.sort( (a,b) =>{
                return new Date(b.createdOn) - new Date(a.createdOn);
            })            
            this.setState({
                posts:sortedPosts
            })
        })
    }

    onClickHandler = (e) =>{
        let fileObject = this.fileInput.current.files[0];
        let formData = new FormData();
        formData.append('post', fileObject);
        axios.post("/api/user", formData).then( (obj)=>{
            // console.log(obj.data.postCreated);
            this.setState({
                userPhoto: obj.data.postCreated.photo
            })
            this.componentDidMount();
        })
    }
    render() { 
        return ( 
            <div className="home">
                <div className="file-input">
                <input className="input" type="file" ref = {this.fileInput} name="" id=""/>
                <button className="btn btn-warning" onClick={this.onClickHandler}>Upload Image</button>
                </div>
                <div className="image-file">
                <img className="image" src={this.state.userPhoto} alt=""/>
                </div>
            </div>
         );
    }
}
export default Home;

