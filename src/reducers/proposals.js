import { SAVE_PROPOSALS } from 'src/actions/proposals';

export const initialState = {
  proposalsList: [],
};

const cheeses = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROPOSALS:
      return {
        ...state,
        proposalsList: action.proposals,
      };
    default:
      return state;
  }
};

export default cheeses;
