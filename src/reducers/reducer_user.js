function nextTodoId(obj) {
    const maxId = obj.reduce((maxId, obj) => Math.max(obj.id, maxId), -1)
    return maxId + 1
  }

const initialState = {
    users:[ {id:0, data: {}  }]
  };

const reducer_user=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_USER':
            const newuser = {id:nextTodoId(state.users),data:action.payload}
            return{
                ...state,users:[...state.users,newuser]  // Adding to state

            }
        case 'DELETE_USER':
            const newusers = state.users.filter(users=>(users.id !==action.id) )
            return{
                ...state,newusers  // replacing state
            }
        default:   // Do not forget to write default state
        return state;
    }
}
export default reducer_user