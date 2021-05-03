import { connect } from 'react-redux'
import {edit_todo} from '../../actions/action_todo'
import PropTypes from 'prop-types';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

  class EditTodo extends Component  {
    state = {
        id: this.props.location.state.id,
        title: this.props.location.state.title,
        text: this.props.location.state.text,
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
 // console.log('props edit', this.props)
    return (
      <div>
        <div className="container center">
          <h4 className="center"></h4>
          <div>
        <form onSubmit={this.handleSubmit}>
          <label className="App-header">Edit todo:</label>
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
  const mapStateToProps = (state) => {
    return {
      todos : state.reducer_todo.todos
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      edit_todo: (todo) => dispatch(edit_todo(todo))
    }
  }

  // AddTodo.propTypes = {
  //   id: PropTypes.number,
  //   data: PropTypes.string
  // }
  // AddTodo.defaultProps = {
  //   id: null,
  //   data:null
  //   };
  export default connect(mapStateToProps, mapDispatchToProps)(EditTodo)
