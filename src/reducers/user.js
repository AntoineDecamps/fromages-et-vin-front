/* eslint-disable no-console */
// Reducer user
import { CHANGE_FIELD } from 'src/actions/user';

const initialState = {
  email: 'admin@admin.com',
  password: 'admin',
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      console.log(state, 'change field action reducer');
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default user;
