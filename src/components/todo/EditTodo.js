import { connect } from 'react-redux'
import {edit_todo} from '../../actions/action_todo'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

  class EditTodo extends Component  {
    state = {
        id: this.props.statetodo.id,
        title: this.props.statetodo.title,
        text: this.props.statetodo.text
      }
      onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
      handleSubmit = (e) => {
        e.preventDefault();
       // console.log('handle run',this.props)
       const todo = {id:this.state.id, title:this.state.title,text:this.state.text}
       //console.log('handleSubmit',todo)
        this.props.edit_todo(todo);
        this.setState({
          id:this.state.id, title:this.state.title,text:this.state.text
        })
      }

render(){
 // console.log('props edit', this.props.statetodo)
    return (
      <div>
        <div className="container center">
          <div>
        <form onSubmit={this.handleSubmit}>
          <label className="App-header blue">Edit todo:</label>
          <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
          <input type="text" name="text" onChange={this.onChange} value={this.state.text} />
          <Link  className="btn" to={{pathname:'/todo'}}>Back to List</Link> {' '} <input  className="center btn blue" type="submit" value="Update" />
        </form>
      </div>
        </div>
      </div>
    )
  }
}
  const mapStateToProps = (state,ownProps) => {
    const updateTodo = state.reducer_todo.todos.filter(todo => todo.id === ownProps.location.state);
    return {

      statetodo : updateTodo[0] // filter returns list picking the first one
     
      
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      edit_todo: (todo) => dispatch(edit_todo(todo))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(EditTodo)
