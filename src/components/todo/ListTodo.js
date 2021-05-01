import { connect } from 'react-redux'
// how you can make initial state empty ?


const ListTodo = (props) => {
//console.log('props abdr', props)

    console.log('abdr', props)
    const todoList = props.todos.length>1 ? (
        props.todos.filter((x)=>x.id !== null).map(todo => {
          return (
            
            <div className="collection-item"  key={todo.id}>
              <input type="submit" value="Edit" className="left"/>
              <input type="submit" value="Delete" className="right"/>
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
  

  export default connect(mapStateToProps)(ListTodo)