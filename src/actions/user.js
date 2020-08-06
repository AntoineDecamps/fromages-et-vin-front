// Actions user

// Action Types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOGIN = 'LOGIN';
export const SAVE_USER = 'SAVE_USER';
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

export const saveUser = (name, token) => ({
  type: SAVE_USER,
  name,
  token,
});

export const logout = () => ({
  type: LOGOUT,
});

export const checkIsLogged = () => ({
  type: CHECK_IS_LOGGED,
});
