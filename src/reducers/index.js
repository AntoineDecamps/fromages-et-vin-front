import { combineReducers } from 'redux';
import toggler from './toggler';
import cheeses from './cheeses';
import wines from './wines';
import user from './user';

export default combineReducers({
  toggler,
  cheeses,
  wines,
  user,
});
