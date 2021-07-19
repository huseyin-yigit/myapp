import { connect } from 'react-redux'
import {add_customer} from '../../actions/action_customer'
import React, {useState} from 'react'

  const AddCustomer = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
 
   const onChange = (e) => {
          if (e.target.name==="name"){setName(e.target.value)}
          if (e.target.name==="email"){setEmail(e.target.value)}

      }
   const handleSubmit = (e) => {
        e.preventDefault();
        props.add_customer(name,email);
        setName('')
        setEmail('')
      }
    return (
      <div>
        <div className="container center">
          <div>
        <form onSubmit={handleSubmit}  >
          <label className="App-header blue">Add a new customer:</label>
          <input type="text" name="name" onChange={onChange} value={name} placeholder="Add Name"/>
          <input type="email" name="email" onChange={onChange} value={email} placeholder="Add Email"/>
          <input  className="center btn green" type="submit" value="Submit"/>
        </form>
      </div>
        </div>
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
      add_customer: (name,email) => dispatch(add_customer(name,email))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(AddCustomer)
