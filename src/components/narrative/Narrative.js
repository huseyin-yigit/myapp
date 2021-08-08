import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Challenges from './Challenges'
import Activities from './Activities'
import Autosave from '../../utils/AutoSave';
import {increase_counter,decrease_counter} from '../../actions/action_narrative'

const Narrative =(props)=>{
    const {narrative,increase_counter,decrease_counter} = props
    //console.log('narrative', narrative)
    const saveNarrative = ()=>{
      console.log('Autosave calisti')
    }
return(
    <div className="center">
    <Challenges challenges={narrative.challenges} />  
    <p/>      
    <Activities />
    <h1>Counter: {narrative.counter}</h1>
    <input  className="center btn green" onClick={()=>increase_counter()} type="submit"  value="Increase" />
    <input  className="center btn green" onClick={()=>decrease_counter()} type="submit"  value="Decrease" />
    <Autosave
        data={narrative}
        onSave={data => saveNarrative(data)}
      />
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
