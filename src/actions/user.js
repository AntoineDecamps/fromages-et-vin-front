// Actions user

// Action Types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOGIN = 'LOGIN';
export const SAVE_USER = 'SAVE_USER';
export const GET_USERS = 'GET_USERS';
export const SAVE_USERS = 'SAVE_USERS';
export const LOGOUT = 'LOGOUT';
export const CHECK_IS_LOGGED = 'CHECK_IS_LOGGED';

// Action Creators
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const login = () => ({
  type: LOGIN,
});

export const saveUser = (name) => ({
  type: SAVE_USER,
  name,
});

export const logout = () => ({
  type: LOGOUT,
});

export const checkIsLogged = () => ({
  type: CHECK_IS_LOGGED,
});

export const getUsers = () => ({
  type: GET_USERS,
});

export const saveUsers = (users) => ({
  type: SAVE_USERS,
  users,
});
