function nextTodoId(obj) {
    const maxId = obj.reduce((maxId, obj) => Math.max(obj.id, maxId), -1)
    return maxId + 1
  }

const initialState = {
    todos:[ {id:null, title:null, text:null  }]
  };

const reducer_todo=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_TODO':
            const newtodo = {
                id:nextTodoId(state.todos),
                title: action.payload.title,
                text: action.payload.text,
            } 
            return{
               todos:[...state.todos,newtodo]  // Adding to state

            }
        case 'DELETE_TODO':
            console.log('delete reducer action id: ',action.payload)
            console.log('delete reducer todos: ',state.todos)
            let newtodos = state.todos.filter(todos=>(todos.id !==action.payload) )
            console.log('newtodolist:',newtodos)
            return{
                todos:newtodos  // replacing state
            }
        default:   // Do not forget to write default state
        return state;
    }
}
export default reducer_todo