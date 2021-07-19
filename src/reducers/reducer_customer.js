function increaseId(customers) {
    return (
        customers.length === 0 ? 1 : customers[customers.length-1].id+1
    )
  }

const initialState = {
    customers:[]
  };

const reducer_customer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_CUSTOMER':
            console.log('addcustomer reducer payload:: ',action.payload)
            const newcustomer = {
                id:increaseId(state.customers),
                name: action.payload.name,
                email: action.payload.email
            } 
            return{
               // ...state,customers:[...state.customers,newcustomer]  // Adding to state
               customers:[...state.customers,newcustomer] 

            }
            case 'DELETE_CUSTOMER':
                console.log('delete customer reducer payload:: ',action.payload)
                let newcustomers = state.customers.filter(customer=>(customer.id !==action.payload) )
                return{
                    customers:newcustomers  // replacing state
                }
    
            case 'EDIT_CUSTOMER':
                  console.log('edit customer reducer payload:: ',action.payload)
                  const newEdit = {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email,
                } 
                  let newEditcustomers = state.customers.map(customer=>(customer.id === action.payload.id ? newEdit : customer))
                  return{
                      customers:newEditcustomers  // replacing state
                  }
            default:   // Do not forget to write default state
            return state;
    }
}
export default reducer_customer

