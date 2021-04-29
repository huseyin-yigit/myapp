import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Todo from './components/todo/Todo'
import Users from './components/Users'
import { Route, BrowserRouter, Switch } from 'react-router-dom'




function App() {
  return (
    <BrowserRouter>
      <div className="teal lighten-5 " style={{ height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'hidden'}}>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/todo' component={Todo} />
          <Route path='/users' component={Users} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

{/* <div className="card-panel teal lighten-5 row">
<div className="card-panel teal lighten-3 col s12">This div is 12-columns wide on all screen sizes</div>
<div className="card-panel blue lighten-8 col s2">6-columns (one-half)</div>
<div className="card-panel red lighten-9 col s2">6-columns (one-half)</div>
<div className="card-panel yellow lighten-10 col s2">6-columns (one-half)</div>
</div> */}

// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is your replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Switch,
// } from 'react-router-dom';
// import React from 'react';

// const Home = () => <h1>Home abdr</h1>;
// const About = () => <h1>About abdr</h1>;

// // We give each route either a target `component`, or we can send functions in `render` or `children` 
// // that return valid nodes. `children` always returns the given node whether there is a match or not.
// const App = () => (
//   <Router>
//     <div>
//       <Link to="/">Home</Link>{' '}
//       <Link to={{pathname: '/about'}}>About</Link>{' '}
//       <Link to="/contact">Contact </Link>

//       <Switch>
//         <Route exact path="/" component={Home} />

//         <Route path="/contact" render={() => <h1>Contact Us</h1>} />
//         <Route path="/blog" children={({match}) => (  <li className={match ? 'active' : ''}><Link to="/blog"> Blog</Link> </li>)} />
//         <Route render={() => <h1>Page not found</h1>} />
//       </Switch>
//       <div>
//   <div>dfdfgfd</div>
//   <div><Route path="/about" component={About} /></div>
// </div>
//     </div>
//   </Router>
// );
