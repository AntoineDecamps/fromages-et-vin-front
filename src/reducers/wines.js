import { SAVE_WINES } from 'src/actions/wine';

export const initialState = {
  winesList: [],
};

const cheeses = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_WINES:
      return {
        ...state,
        winesList: action.wines,
      };
    default:
      return state;
  }
};

export default cheeses;
