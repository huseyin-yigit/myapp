import reducer_todo from './reducer_todo';
import reducer_user from './reducer_user';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({ reducer_todo,reducer_user});
export default rootReducer