import { SAVE_CHEESES } from 'src/actions/cheese';

export const initialState = {
  cheesesList: [],
};

const cheeses = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CHEESES:
      return {
        ...state,
        cheesesList: action.cheeses,
      };
    default:
      return state;
  }
};

export default cheeses;
