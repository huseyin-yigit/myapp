import React, { useEffect, useState } from "react";
import {add_challenge} from './../../actions/action_narrative'
import { connect } from "react-redux";
import AddChallenge from "./AddChallenges";
const Challenges =(props)=>{
    const {challenges,add_challenge}=props
    //console.log('challenges',props)
return(
    <div className="center">
        <label className="App-header blue">All Challenges</label>
        {challenges.map((challenge,index)=>(<AddChallenge  chalIndex={index} challenge={challenge}/>) )}
<input  className="center btn green" onClick={()=>add_challenge()} type="submit" value="Add Challenges" />
    </div>
)
}

const mapDispatchToProps = (dispatch) => {
    return {
        add_challenge: () => dispatch(add_challenge())
    }
  }

//export default Challenges
export default connect(null, mapDispatchToProps)(Challenges)