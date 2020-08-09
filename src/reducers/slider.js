import { HANDLE_SLIDER } from 'src/actions/slider';

const initialState = {
  open: false,
};

const slider = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_SLIDER:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};

export default slider;
