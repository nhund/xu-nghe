import {combineReducers} from 'redux';
import {Posting} from './Posting'

const reducers = combineReducers({
  isloading: true,
  Posting : Posting
});

export default reducers;