import { HANDLE_TOGGLE } from '../actions/toggler';

const initialState = {
  open: false,
};

const toggler = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_TOGGLE:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};

export default toggler;
