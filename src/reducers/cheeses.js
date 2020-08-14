import { SAVE_CHEESES } from 'src/actions/cheese';

export const initialState = {
  cheesesList: [],
  cheeseLoading: true,
};

const cheeses = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CHEESES:
      return {
        ...state,
        cheesesList: action.cheeses,
        cheeseLoading: false,
      };
    default:
      return state;
  }
};

export default cheeses;
