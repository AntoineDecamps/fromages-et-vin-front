export const GET_CHEESES = 'GET_CHEESES';
export const SAVE_CHEESES = 'SAVE_CHEESES';

export const getCheeses = () => ({
  type: GET_CHEESES,
});

export const saveCheeses = (cheeses) => ({
  type: SAVE_CHEESES,
  cheeses,
});
