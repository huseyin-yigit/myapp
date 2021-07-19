import {delete_customer} from '../../actions/action_customer'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const ListCustomers = (props) => {
console.log('listprops', props)

function delete_id(id) {
  console.log('delete calisti',id)
  props.delete_customer(id);
}

const customerList = props.customers.length>0 ? (
        props.customers.filter((x)=>x.id !== null).map(customer => {
          return (
            <div className="collection-item"  key={customer.id}>
              <Link className="center btn blue" to={{pathname:'/customer_edit', state:customer.id}}>Update</Link>
              <input type="submit" value="Delete" className="right btn red" onClick={() => delete_id(customer.id)}/>
              <h6 className="center"> <b>{customer.name}</b></h6>
              <p><span> {customer.email}</span></p>
            </div>
          )
        })
      ) : (
        <p className="pad center">You have no customer's left, yay!</p>
      );
    
      return (
        <div className="customers collection">
          {customerList}
        </div>
      )
  } 
  const mapStateToProps = (state) => {
    return {
      customers : state.reducer_customer.customers
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      delete_customer: (id) => dispatch(delete_customer(id))
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(ListCustomers)