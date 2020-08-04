/* eslint-disable no-console */
// Reducer user
import { CHANGE_FIELD, SAVE_USER } from 'src/actions/user';

const initialState = {
  // email: 'admin@admin.com',
  // password: 'admin',
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
      console.log('reducer case SAVE USER');
      return {
        ...state,
        username: '',
        password: '',
        isLogged: true,
      };
    }
    default:
      return state;
  }
};

export default user;
