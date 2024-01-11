// userActions.js
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, user });
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, error });
