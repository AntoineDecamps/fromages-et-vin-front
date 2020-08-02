import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal';

const initialState = {
  open: false,
};

const modal = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        open: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

export default modal;
