/* eslint-disable no-console */
// Middelware user

import axios from 'axios';
import {
  LOGIN,
  saveUser,
  LOGOUT,
  GET_USERS,
  saveUsers,
  setError,
  CHECK_IS_LOGGED,
} from 'src/actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      // console.log('MIDDLEWARE LOGIN');
      const state = store.getState();
      const { username, password } = state.user;
      axios.post('http://192.168.56.101/wine-and-cheese/fromages-et-vin/Cheese-and-Wine/public/api/login', {
        username,
        password,
      })
        .then((response) => {
          console.log('MIDDLEWARE LOGIN', response);
          localStorage.setItem('token', response.data.apiToken);
          localStorage.setItem('pseudo', response.data.name);
          console.log('LOGIN', localStorage);
          store.dispatch(saveUser(response.data.name));
        })
        .then(() => {
          const token = localStorage.getItem('token');

          const header = {
            headers: {
              'X-Auth-Token': token,
              'content-type': 'application/json',
            },
          };

          axios.post('http://192.168.56.101/wine-and-cheese/fromages-et-vin/Cheese-and-Wine/public/api/islogged', {
            username,
            header,
          });
        })
        .then((response) => {
          document.location.href = '/';
          console.log(response.logged);
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(setError(error));
        });
      break;
    }
    // case CHECK_IS_LOGGED: {
    //   console.log('MIDDLEWARE CHECKISLOGGED');
    //   const token = localStorage.getItem('token');
    //   console.log('TOKEN', token);
    //   axios.post('http://192.168.56.101/wine-and-cheese/fromages-et-vin/Cheese-and-Wine/public/api/islogged', {
    //     token,
    //   }, { headers: { 'Content-Type': 'application/json' } })
    //     .then((response) => {
    //       // console.log(response);
    //       console.log('LOGGED', response.data.logged);
    //       if (token) {
    //         store.dispatch(saveUser(response.data.name));
    //       }
    //     })
    //     .catch((error) => console.log(error));
    //   break;
    // }
    case LOGOUT: {
      console.log('MIDDLEWARE LOGOUT');
      axios.post('http://192.168.56.101/wine-and-cheese/fromages-et-vin/Cheese-and-Wine/public/api/logout', {})
        .then((response) => {
          console.log('MIDDLEWARE LOGOUT', response);
          console.log('LOGOUT', localStorage);
          localStorage.removeItem('token');
          localStorage.removeItem('pseudo');
          next(action);
        })
        .then(() => {
          document.location.href = '/connexion';
        });
      break;
    }
    case GET_USERS: {
      axios.get('http://192.168.56.101/wine-and-cheese/fromages-et-vin/Cheese-and-Wine/public/api/users')
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
