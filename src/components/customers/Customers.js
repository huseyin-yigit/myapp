import AddCustomer from './AddCustomer'
import ListCustomers from './ListCustomers'
const Customers = (props) => {
    return (
      <div> 
      <AddCustomer/>
      <ListCustomers  customers={props.customers}/>
      </div>
    )

  }
  
  export default Customers