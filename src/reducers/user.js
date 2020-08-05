/* eslint-disable no-console */
// Reducer user
import { CHANGE_FIELD, LOGIN, SAVE_USER, SAVE_USERS } from 'src/actions/user';

const initialState = {
  // email: 'admin@admin.com',
  // password: 'admin',
  isLogged: false,
  email: '',
  password: '',
  usersList: [],
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      // console.log(state, 'change field action reducer');
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGIN: {
      console.log(state, 'reducer case LOGIN');
      return {
        ...state,
        isLogged: true,
      };
    }
    case SAVE_USER: {
      console.log('reducer case SAVE USER');
      return {
        ...state,
        email: '',
        password: '',
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
