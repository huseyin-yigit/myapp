import { connect } from 'react-redux'
import {add_todo,delete_todo,edit_todo} from '../../actions/action_todo'
import PropTypes from 'prop-types';
import React, { Component } from 'react'

  class AddTodo extends Component  {
    state = {
        title: 'Title Here',
        text:'Text Here'
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
  
    return (
      <div>
        <div className="container center">
          <h4 className="center"></h4>
          <div>
        <form onSubmit={this.handleSubmit}  >
          <label className="App-header">Add a new todo:</label>
          <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
          <input type="text" name="text" onChange={this.onChange} value={this.state.text} />
          <input  className="center" type="submit" value="Submit" onSubmit={this.handleSubmit} />
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

  // AddTodo.propTypes = {
  //   id: PropTypes.number,
  //   data: PropTypes.string
  // }
  // AddTodo.defaultProps = {
  //   id: null,
  //   data:null
  //   };
  export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
