// function nextTodoId(obj) {
//     const maxId = obj.reduce((maxId, obj) => Math.max(obj.id, maxId), -1)
//     return maxId + 1
//   }

  function increaseId(todos) {
    return (
    todos.length === 0 ? 1 : todos[todos.length-1].id+1
    )
  }

const initialState = {
   // todos:[ {id:null, title:null, text:null  }]
    todos:[]
  };

const reducer_todo=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_TODO':
            const newtodo = {
                id:increaseId(state.todos),
                title: action.payload.title,
                text: action.payload.text,
            } 
            return{
               todos:[...state.todos,newtodo]  // Adding to state

            }
        case 'DELETE_TODO':
            //console.log('delete reducer action id: ',action.payload)
           // console.log('delete reducer todos: ',state.todos)
            let newtodos = state.todos.filter(todos=>(todos.id !==action.payload) )
            //console.log('newtodolist:',newtodos)
            return{
                todos:newtodos  // replacing state
            }

            case 'EDIT_TODO':
            //  console.log('edit reducer payload:: ',action.payload)
              const newEdit = {
                id: action.payload.id,
                title: action.payload.title,
                text: action.payload.text,
            } 
              let newEditTodos = state.todos.map(todos=>(todos.id === action.payload.id ? newEdit : todos))
              //console.log('newEditTodos:',newEditTodos)
              return{
                  todos:newEditTodos  // replacing state
              }
        default:   // Do not forget to write default state
        return state;
    }
}
export default reducer_todo