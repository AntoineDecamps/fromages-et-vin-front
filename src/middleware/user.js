/* eslint-disable no-console */
// Middelware user

import axios from 'axios';
import { LOGIN, saveUser, LOGOUT } from 'src/actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      console.log('middlware Login');
      const state = store.getState();
      const { username, password } = state.user;
      axios.post('http://54.152.134.184/fromages-et-vin/Cheese-and-Wine/public/api/login', {
        username,
        password,
      }, { withCredentials: true })
        .then((response) => {
          console.log(response);
          store.dispatch(saveUser(response.data.name));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    case LOGOUT: {
      console.log('middlware logout');
      axios.post('http://54.152.134.184/fromages-et-vin/Cheese-and-Wine/public/api/logout', {}, { withCredentials: true })
        .then((response) => {
          console.log(response);
          next(action);
        });
      break;
    }
    default:
      next(action);
      break;
  }
};
