import { connect } from 'react-redux'
import {edit_user} from '../../actions/action_user'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

  const EditUser = (props)=>  {
    console.log('edituserprops',props)
    const [id, setId] = useState(props.stateuser.id);
    const [name, setName] = useState(props.stateuser.name);
    const [email, setEmail] = useState(props.stateuser.email);
    const onChange = (e) => {
      if (e.target.name==="name"){setName(e.target.value)}
      if (e.target.name==="email"){setEmail(e.target.value)}

  }
  const handleSubmit = (e) => {
        e.preventDefault();
       // console.log('handle run',this.props)
       const user = {id:id, name:name, email:email}
       console.log('handleSubmit',user)
        props.edit_user(user);

        setId(id)
        setName(name)
        setEmail(email)
      }


    return (
      <div>
        <div className="container center">
          <div>
        <form onSubmit={handleSubmit}>
          <label className="App-header blue">Edit User</label>
          <input type="text" name="name" onChange={onChange} value={name} />
          <input type="email" name="email" onChange={onChange} value={email} />
          <Link  className="btn" to={{pathname:'/users'}}>Back to List</Link> {' '} <input  className="center btn blue" type="submit" value="Update" />
        </form>
      </div>
        </div>
      </div>
    )
  }

  const mapStateToProps = (state,ownProps) => {
    const updateuser = state.reducer_user.users.filter(user => user.id === ownProps.location.state);
    return {

      stateuser : updateuser[0] // filter returns list picking the first one
     
      
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      edit_user: (user) => dispatch(edit_user(user))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(EditUser)
