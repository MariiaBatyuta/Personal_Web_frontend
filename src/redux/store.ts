import { configureStore } from "@reduxjs/toolkit";
import { sendMailReducer } from "./mailing/slice";

const store = configureStore({
  reducer: {
    contact: sendMailReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;