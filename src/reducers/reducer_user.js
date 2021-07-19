function increaseId(users) {
    return (
        users.length === 0 ? 1 : users[users.length-1].id+1
    )
  }

const initialState = {
    users:[]
  };

const reducer_user=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_USER':
            const newuser = {
                id:increaseId(state.users),
                name: action.payload.name,
                email: action.payload.email
            } 
            return{
               // ...state,users:[...state.users,newuser]  // Adding to state
               users:[...state.users,newuser] 

            }
            case 'DELETE_USER':
                let newusers = state.users.filter(user=>(user.id !==action.payload) )
                return{
                    users:newusers  // replacing state
                }
    
            case 'EDIT_USER':
                 // console.log('edit reducer payload:: ',action.payload)
                  const newEdit = {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email,
                } 
                  let newEditUsers = state.users.map(user=>(user.id === action.payload.id ? newEdit : user))
                  return{
                      users:newEditUsers  // replacing state
                  }
            default:   // Do not forget to write default state
            return state;
    }
}
export default reducer_user

