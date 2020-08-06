// Actions user

// Action Types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOGIN = 'LOGIN';
export const SAVE_USER = 'SAVE_USER';
export const GET_USERS = 'GET_USERS';
export const SAVE_USERS = 'SAVE_USERS';

// Action Creators
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const login = () => ({
  type: LOGIN,
});

export const saveUser = () => ({
  type: SAVE_USER,
});

export const getUsers = () => ({
  type: GET_USERS,
});

export const saveUsers = (users) => ({
  type: SAVE_USERS,
  users,
});
