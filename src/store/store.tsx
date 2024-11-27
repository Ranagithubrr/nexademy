import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, PersistConfig, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import todoReducer from "./slices/TodoSlice";

const persistConfig: PersistConfig<any> = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  todos: todoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
