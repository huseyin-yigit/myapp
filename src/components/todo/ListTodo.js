import { connect } from 'react-redux'
// how you can make initial state empty ?

const ListTodo = (props) => {
    console.log('abdr', props)
    const todoList = props.todos.length>1 ? (
        props.todos.map(todo => {
          return (
            <div className="collection-item"  key={todo.id}>
              <p className="center"> {todo.title}</p> 
              <p><span> {todo.text}</span></p>
            </div>
          )
        })
      ) : (
        <p className="pad left">You have no todo's left, yay!</p>
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
  

  export default connect(mapStateToProps)(ListTodo)