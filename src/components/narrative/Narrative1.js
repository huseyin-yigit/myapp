import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Challenges from './Challenges'
import Activities from './Activities'
import {increase_counter,decrease_counter} from './../../actions/action_narrative'

const Narrative =(props)=>{
    const {narrative,increase_counter,decrease_counter} = props
   // console.log('props', narrative.counter)
  const array= [];
   for (let i = 0; i < narrative.counter; i++) {
        array.push( <Challenges />  )
   }
return(
    <div>
    <Challenges />  
    <p/>      
    <Activities />
    <h1>Counter: {narrative.counter}</h1>
    
    <input  className="center btn green" onClick={()=>increase_counter()} value="Increase" />
    <input  className="center btn green" onClick={()=>decrease_counter()} value="Decrease" />
    <p>
    <h1> {array}</h1>
    </p>
    </div>
)
}
//export default Narrative

const mapStateToProps = (state) => {
    return {
      narrative : state.narrative
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        increase_counter: () => dispatch(increase_counter()),
        decrease_counter: () => dispatch(decrease_counter())
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Narrative)
