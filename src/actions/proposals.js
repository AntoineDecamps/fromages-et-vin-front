export const GET_PROPOSALS = 'GET_PROPOSALS';
export const SAVE_PROPOSALS = 'SAVE_PROPOSALS';

export const getProposals = () => ({
  type: GET_PROPOSALS,
});

export const saveProposals = (proposals) => ({
  type: SAVE_PROPOSALS,
  proposals,
});
