import React, {useEffect,useState} from 'react'
import {delete_challenge,update_challenge} from './../../actions/action_narrative'
import { connect } from "react-redux";

  const AddChallenge = (props) => {
    const {challenge,delete_challenge,update_challenge,chalIndex}=props
   // console.log('addchall',chalIndex)
    const [name, setName] = useState(challenge.name);
    const [email, setEmail] = useState(challenge.email);

   useEffect(() => {
    setName(challenge.name)
    setEmail(challenge.email)
  }, [challenge]);

   const onChange = (e) => {
        //   if (e.target.name==="name"){setName(e.target.value)}
        //   if (e.target.name==="email"){setEmail(e.target.value)}
          update_challenge(chalIndex,e.target.name, e.target.value)
      }
    return (
      <div>
          <p><br/>
        <div className="container center">
          <div className="right">
          <input  className="center btn green" onClick={()=>delete_challenge(chalIndex)} type="submit" value={'Delete' + chalIndex} />
          </div><div>
          <input type="text" name="name" onChange={onChange} value={name} placeholder="Add Name"/>
          <input type="email" name="email" onChange={onChange} value={email} placeholder="Add Email"/>
      </div>
        </div>
        <br/></p>
      </div>
    )
  }

  

  
//export default AddChallenge
const mapDispatchToProps = (dispatch) => {
    return {
        delete_challenge: (index) => dispatch(delete_challenge(index)),
        update_challenge: (index,name,email) => dispatch(update_challenge(index,name,email))
    }
  }

//export default Challenges
export default connect(null, mapDispatchToProps)(AddChallenge)
