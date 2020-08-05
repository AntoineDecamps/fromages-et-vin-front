import { combineReducers } from 'redux';
import toggler from './toggler';
import cheeses from './cheeses';
import wines from './wines';
import modal from './modal';
import user from './user';
import edit from './edit';

import allProducts from './allProducts';

export default combineReducers({
  toggler,
  cheeses,
  wines,
  modal,
  user,
  allProducts,
  edit,
});
