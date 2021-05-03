import { connect } from 'react-redux'
import {delete_todo,edit_todo} from '../../actions/action_todo'
// how you can make initial state empty ?

//
const ListTodo = (props) => {
console.log('listprops', props)

function delete_id(id) {
  //console.log('delete calisti',id)
  props.delete_todo(id);
}
    const todoList = props.todos.length>0 ? (
        props.todos.filter((x)=>x.id !== null).map(todo => {
          return (
            
            <div className="collection-item"  key={todo.id}>
              <input type="submit" value="Edit" className="left"/>
              <input type="submit" value="Delete" className="right" onClick={() => delete_id(todo.id)}/>
              <h6 className="center"> <b>{todo.title}</b></h6>
              <p><span> {todo.text}</span></p>
            </div>
          )
        })
      ) : (
        <p className="pad center">You have no todo's left, yay!</p>
      );
    
      return (
        <div className="todos collection">
          {todoList}
        </div>
      )
  }
    const mapStateToProps = (state) => {
    return {
      todos : state.reducer_todo.todos
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      delete_todo: (id) => dispatch(delete_todo(id))
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(ListTodo)