import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper green darken-2">
      <div className="container">
        <ul className="right">
        <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to='/todo'>Todo</NavLink></li>
          <li><NavLink to='/users'>Users</NavLink></li>
          <li><NavLink to='/customers'>Customers</NavLink></li>
          <li><NavLink to='/use'>Use</NavLink></li>
          <li><NavLink to='/autosave'>Autosave</NavLink></li>
          <li><NavLink to='/narrative'>Narrative</NavLink></li>
        </ul>
      </div>
      
    </nav> 
  )
}

export default withRouter(Navbar)