/* eslint-disable no-console */
// Reducer user
import {
  CHANGE_FIELD,
  SAVE_USER,
  LOGOUT,
  CHECK_IS_LOGGED,
  SAVE_USERS,
  SET_ERROR,
} from 'src/actions/user';

const initialState = {
  isLogged: false,
  username: '',
  password: '',
  usersList: [],
  pseudo: '',
  // error: '',
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
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case CHECK_IS_LOGGED: {
      console.log('REDUCER CHECKISLOGGED', state);
      const token = localStorage.getItem('token');
      const pseudo = localStorage.getItem('pseudo');
      console.log('TOKEN', token);

      if (token) {
        return {
          ...state,
          pseudo,
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
    case SAVE_USERS: {
      return {
        ...state,
        usersList: action.users,
      };
    }
    default:
      return state;
  }
};

export default user;
