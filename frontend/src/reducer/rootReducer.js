import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import bankReducer from "./bankReducer";
import userReducer from "./userReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

export const rootInitialState = {
  isLoading: true,
  data: "",
  error: "",
};

const persistConfig = {
  key: 'root',
  storage,
}

export const store = configureStore({
  reducer: {
    bank: bankReducer,
    user: persistReducer(persistConfig, userReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)
