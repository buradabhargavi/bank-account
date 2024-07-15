import { /* applyMiddleware,  */ combineReducers, createStore } from "redux";
// import { thunk } from "redux-thunk";
import customerReducer from "./Features/Customers/CustomerSlice";
import AccountReducer from "./Features/Accounts/AccountSlice";

const rootReducer = combineReducers({
  account: AccountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

export default store;
