import reducer_todo from './reducer_todo';
import reducer_user from './reducer_user';
import reducer_customer from './reducer_customer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({ reducer_todo,reducer_user,reducer_customer});
export default rootReducer