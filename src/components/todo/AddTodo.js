import { connect } from 'react-redux'
import {add_todo} from '../../actions/action_todo'
import React, { Component } from 'react'

  class AddTodo extends Component  {
    state = {
        title: '',
        text:''
      }
      onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
      handleSubmit = (e) => {
        e.preventDefault();
       // console.log('abdr',this.props)
        this.props.add_todo(this.state.title,this.state.text);
        this.setState({
          title: '',
          text:''
        })
      }
render(){
 // console.log('props abdr', this.props)
    return (
      <div>
        <div className="container center">
          <div>
        <form onSubmit={this.handleSubmit}  >
          <label className="App-header blue">Add a new todo:</label>
          <input type="text" name="title" onChange={this.onChange} value={this.state.title} placeholder="Add Title"/>
          <input type="text" name="text" onChange={this.onChange} value={this.state.text} placeholder="Add Text"/>
          <input  className="center btn green" type="submit" value="Submit"/>
        </form>
      </div>
        </div>
      </div>
    )
  }
}
  const mapStateToProps = (state) => {
    return {
      todos : state.reducer_todo.todos
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      add_todo: (title,text) => dispatch(add_todo(title,text))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
