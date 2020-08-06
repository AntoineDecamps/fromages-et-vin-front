/* eslint-disable no-console */
// Reducer user
import {
  CHANGE_FIELD,
  SAVE_USER,
  LOGOUT,
  CHECK_IS_LOGGED,
} from 'src/actions/user';

const initialState = {
  isLogged: false,
  username: '',
  password: '',
  pseudo: '',
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      // console.log('CHANGE FIELD REDUCER', state');
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER: {
      console.log('SAVE USER REDUCER', state);
      return {
        ...state,
        username: '',
        password: '',
        pseudo: action.name,
        isLogged: true,
      };
    }
    case CHECK_IS_LOGGED: {
      console.log('REDUCER CHECKISLOGGED', state);
      const token = localStorage.getItem('token');
      console.log('TOKEN', token);

      if (token) {
        return {
          ...state,
          isLogged: true,
        };
      }

      return {
        ...state,
      };
    }
    case LOGOUT: {
      console.log('LOGOUT REDUCER', state);
      return {
        ...state,
        isLogged: false,
      };
    }
    default:
      return state;
  }
};

export default user;
