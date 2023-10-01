import { rootInitialState } from "./rootReducer";

const bankReducer = (state = rootInitialState, action) => {
  switch (action.type) {
    case "get_banks":
      return {
        ...state,
        isLoading: false,
        data: action.payload ?? [],
        error: action.error ?? "",
      };
    case "post_bank":
      return {
        ...state,
        isLoading: false,
        data: action.payload ?? "",
        error: action.error ?? "",
      };
    case "update_bank":
      return {
        ...state,
        isLoading: false,
        data: action.payload ?? "",
        error: action.error ?? "",
      };
    case "delete_bank":
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

export default bankReducer;
