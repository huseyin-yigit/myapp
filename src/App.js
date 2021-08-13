import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Todo from './components/todo/Todo'
import EditTodo from './components/todo/EditTodo'
import EditUser from './components/users/EditUser'
import Users from './components/users/Users'
import Narrative from './components/narrative/Narrative'
import Autosave from './components/autosave/Autosave'
import UseEffect from './components/use/UseEffect'
import CardSample from './components/card/CardSample'
import EditCustomer from './components/customers/EditCustomer'
import ContainerCustomers from './components/customers/ContainerCustomers'
import { Route, BrowserRouter, Switch } from 'react-router-dom'




function App() {
  return (
    <BrowserRouter>
      <div className="teal lighten-5 " style={{ height: '100%', position: 'sticky', left: '0px', width: '100%', overflow: 'hidden'}}>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/todo' component={Todo} />
          <Route path='/todo_edit' component={EditTodo} />
          <Route path='/user_edit' component={EditUser} />
          <Route path='/users' component={Users} />
          <Route path='/customer_edit' component={EditCustomer} />
          <Route path='/customers' component={ContainerCustomers} />
          <Route path='/autosave' component={Autosave} />
          <Route path='/use' component={UseEffect} />
          <Route path='/card' component={CardSample} />
          <Route path='/narrative' component={Narrative} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
