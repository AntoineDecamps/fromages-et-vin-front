// Actions user

// Action Types
export const CHANGE_FIELD = 'CHANGE_FIELD';

// Action Creators
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});
