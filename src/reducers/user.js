/* eslint-disable no-console */
// Reducer user
import { CHANGE_FIELD, SAVE_USER, LOGOUT } from 'src/actions/user';

const initialState = {
  isLogged: false,
  username: '',
  password: '',
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      // console.log(state, 'change field action reducer');
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER: {
      console.log('Save User (reducer)', state);
      return {
        ...state,
        username: '',
        password: '',
        pseudo: action.name,
        isLogged: true,
      };
    }
    case LOGOUT: {
      console.log('Logout (reducer)', state);
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
