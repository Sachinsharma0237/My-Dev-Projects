import React, { Component } from 'react';

class InputBox extends Component {
    state = { 
        todo:""

     }

     onChangeHandler = (e) =>{
        let value = e.target.value;
        this.setState({
            todo:value
        })
     }


    addTodoHandle = () =>{
        this.props.addToDo(this.state.todo);
        this.setState({
            todo:""
        })
    }

    render() { 
        return ( 
            <div className="input-group mt-3 mb-3">
                 <input className="form-control" value ={this.state.todo} onChange={ (e)=>{this.onChangeHandler(e)}  } ></input>
                 <button className="btn btn-primary" onClick={ this.addTodoHandle }>ADD TODO</button>
            </div>
         );
    }
}
 
export default InputBox;