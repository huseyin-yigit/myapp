import { connect } from 'react-redux'
import {edit_customer} from '../../actions/action_customer'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

  const EditCustomer = (props)=>  {
    console.log('editcustomerprops',props)
    const [id, setId] = useState(props.statecustomer.id);
    const [name, setName] = useState(props.statecustomer.name);
    const [email, setEmail] = useState(props.statecustomer.email);
    const onChange = (e) => {
      if (e.target.name==="name"){setName(e.target.value)}
      if (e.target.name==="email"){setEmail(e.target.value)}

  }
  const handleSubmit = (e) => {
        e.preventDefault();
       // console.log('handle run',this.props)
       const customer = {id:id, name:name, email:email}
       console.log('handleSubmit',customer)
        props.edit_customer(customer);
        setId(id)
        setName(name)
        setEmail(email)
      }


    return (
      <div>
        <div className="container center">
          <div>
        <form onSubmit={handleSubmit}>
          <label className="App-header blue">Edit customer</label>
          <input type="text" name="name" onChange={onChange} value={name} />
          <input type="email" name="email" onChange={onChange} value={email} />
          <Link  className="btn" to={{pathname:'/customers'}}>Back to List</Link> {' '} <input  className="center btn blue" type="submit" value="Update" />
        </form>
      </div>
        </div>
      </div>
    )
  }

  const mapStateToProps = (state,ownProps) => {
    const updatecustomer = state.reducer_customer.customers.filter(customer => customer.id === ownProps.location.state);
    return {

      statecustomer : updatecustomer[0] // filter returns list picking the first one
     
      
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      edit_customer: (customer) => dispatch(edit_customer(customer))
    }
  }

   export default connect(mapStateToProps, mapDispatchToProps)(EditCustomer)
