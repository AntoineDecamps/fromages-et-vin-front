export const GET_WINES = 'GET_WINES';
export const SAVE_WINES = 'SAVE_WINES';

export const getWines = () => ({
  type: GET_WINES,
});

export const saveWines = (wines) => ({
  type: SAVE_WINES,
  wines,
});
