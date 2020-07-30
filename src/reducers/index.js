import { combineReducers } from 'redux';
import counter from './counter';
import toggler from './toggler';

export default combineReducers({
  counter,
  toggler,
});
