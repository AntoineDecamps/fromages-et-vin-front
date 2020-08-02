// Middelware user

import axios from 'axios';
import { LOGIN } from 'src/actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      console.log(state, 'middleware LOGIN');
      console.log(state.email);
      console.log(state.password);
    }
      break;
    default:
      next(action);
      break;
  }
};
