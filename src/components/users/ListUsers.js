import { connect } from 'react-redux'
import {delete_user} from '../../actions/action_user'
import { Link } from 'react-router-dom'

const Listusers = (props) => {
console.log('listprops', props)

function delete_id(id) {
  //console.log('delete calisti',id)
  props.delete_user(id);
}

const userList = props.users.length>0 ? (
        props.users.filter((x)=>x.id !== null).map(user => {
          return (
            <div className="collection-item"  key={user.id}>
              <Link className="center btn blue" to={{pathname:'/user_edit', state:user.id}}>Update</Link>
              <input type="submit" value="Delete" className="right btn red" onClick={() => delete_id(user.id)}/>
              <h6 className="center"> <b>{user.name}</b></h6>
              <p><span> {user.email}</span></p>
            </div>
          )
        })
      ) : (
        <p className="pad center">You have no user's left, yay!</p>
      );
    
      return (
        <div className="users collection">
          {userList}
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
      delete_user: (id) => dispatch(delete_user(id))
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Listusers)