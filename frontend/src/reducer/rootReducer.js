import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "./bankReducer";
import userReducer from "./userReducer";

export const rootInitialState = {
  isLoading: true,
  data: "",
  error: "",
};

const store = configureStore({
  reducer: {
    bank: bankReducer,
    user: userReducer,
  },
});

export default store;
