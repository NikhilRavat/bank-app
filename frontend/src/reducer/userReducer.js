import { rootInitialState } from "./rootReducer";

const userReducer = (state = rootInitialState, action) => {
  switch (action.type) {
    case "login_user":
      return {
        ...state,
        isLoading: false,
        data: action.payload ?? "",
        error: action.error ?? "",
      };
    default:
      return state;
  }
};

export default userReducer;
