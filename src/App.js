import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Todo from './components/todo/Todo'
import EditTodo from './components/todo/EditTodo'
import EditUser from './components/users/EditUser'
import Users from './components/users/Users'
import EditCustomer from './components/customers/EditCustomer'
import Customers from './components/customers/Customers'
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
          <Route path='/customers' component={Customers} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
