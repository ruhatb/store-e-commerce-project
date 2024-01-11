import { loginSuccess, loginFailure } from "../Actions/userActions";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      // Simulate login API call
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Dispatch success action and save user info to userReducer
        dispatch(loginSuccess(data.user));
        // Save token to localStorage
        localStorage.setItem("token", data.token);
        // Redirect user to home page (use react-router-dom for navigation)
        // history.push('/home');
      } else {
        // Dispatch failure action and show error message
        dispatch(loginFailure(data.error));
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };
};
