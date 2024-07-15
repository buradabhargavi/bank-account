import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./Features2/Customers2/CustomerSlice2";
import AccountReducer from "./Features2/Accounts2/AccountSlice2";

const store = configureStore({
  reducer: {
    account: AccountReducer,
    customer: customerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
