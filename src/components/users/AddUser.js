import { connect } from 'react-redux'
import {add_user} from '../../actions/action_user'
import React, {useState} from 'react'

  const AddUser = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
 
   const onChange = (e) => {
          if (e.target.name==="name"){setName(e.target.value)}
          if (e.target.name==="email"){setEmail(e.target.value)}

      }
   const handleSubmit = (e) => {
        e.preventDefault();
        props.add_user(name,email);
        setName('')
        setEmail('')
      }
    return (
      <div>
        <div className="container center">
          <div>
        <form onSubmit={handleSubmit}  >
          <label className="App-header blue">Add a new user:</label>
          <input type="text" name="name" onChange={onChange} value={name} placeholder="Add Name"/>
          <input type="email" name="email" onChange={onChange} value={email} placeholder="Add Email"/>
          <input  className="center btn green" type="submit" value="Submit" />
        </form>
      </div>
        </div>
      </div>
    )
  }
  const mapStateToProps = (state) => {
    return {
      users : state.reducer_user.users
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      add_user: (name,email) => dispatch(add_user(name,email))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(AddUser)
