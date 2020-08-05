// Middelware user

import axios from 'axios';
import { LOGIN, GET_USERS, saveUsers } from 'src/actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      const { email, password } = state.user;
      axios.post('http://localhost/APOTHEOSE/BACK/fromages-et-vin/Cheese-and-Wine/public/api/login', {
        email,
        password,
      })
        .then((response) => {
          console.log(response.email, response.password);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    case GET_USERS: {
      axios.get('http://54.152.134.184/fromages-et-vin/Cheese-and-Wine/public/api/back/user/browse')
        .then((response) => {
          console.log('users', response);
          store.dispatch(saveUsers(response.data));
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
