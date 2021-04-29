import { connect } from 'react-redux'

// how you can make initial state empty ?

const ListTodo = (props) => {
    console.log('abdr', props)
    const todoList = props.todos.length>1 ? (
        props.todos.map(todo => {
          return (
            <div className="collection-item" key={todo.id}>
              <span> {todo.title}</span>
              <span> {todo.text}</span>
            </div>
          )
        })
      ) : (
        <p className="center">You have no todo's left, yay!</p>
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