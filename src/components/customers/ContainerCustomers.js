
import { connect } from 'react-redux';
import Customers from './Customers';
import {delete_customer} from '../../actions/action_customer'

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
  export default connect(mapStateToProps,mapDispatchToProps)(Customers)