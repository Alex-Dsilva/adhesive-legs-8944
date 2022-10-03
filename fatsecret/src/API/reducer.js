// reducer related to auth state;
export const reducer = (state, action) => {
    console.log(action)
      switch (action.type) {
        case "LOGIN_REQUEST":
          return { ...state, isLoading: true };
         case "LOGIN_SUCCESS":
          return { ...state, isAuth: true, token: action.payload };
          case "LOGIN_FAILURE":
          return { ...state, isError: true };
        default:
          return state;
      }
    };