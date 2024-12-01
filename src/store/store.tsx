import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, PersistConfig, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import todoReducer from "./slices/TodoSlice";
import { testApi } from "./slices/ApiSlice";

const persistConfig: PersistConfig<any> = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  todos: todoReducer,
  [testApi.reducerPath]: testApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(testApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
