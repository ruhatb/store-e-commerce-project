const initialState = {
  user: null,
  isLoggedIn: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        error: action.error,
      };
    // handle other actions for user reducer
    default:
      return state;
  }
};

export default userReducer;
