/* eslint-disable no-console */
// Middelware user

import axios from 'axios';
import { LOGIN, saveUser } from 'src/actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      console.log('middlware Login');
      const state = store.getState();
      console.log(state.user);
      const { username, password } = state.user;
      axios.post('http://54.152.134.184/fromages-et-vin/Cheese-and-Wine/public/api/login', {
        username,
        password,
      })
        .then((response) => {
          console.log('middlware Login', response);
          store.dispatch(saveUser(response.name));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
      next(action);
      break;
  }
};
