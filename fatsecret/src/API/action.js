// action creators related to auth state;
export const loginRequest = (payload) => {
    return { type: "LOGIN_REQUEST", payload };
  };
export const loginSuccess = (payload) => {
    return { type: "LOGIN_SUCCESS", payload };
  };
export const loginFailure = (payload) => {
    return { type: "LOGIN_FAILURE", payload };
  };
