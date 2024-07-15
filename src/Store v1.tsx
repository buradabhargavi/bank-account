import { combineReducers, createStore } from "redux";

interface AppState {
  balance: number;
  loanAmount: number;
  loanPurpose: string;
}

const initialState: AppState = {
  balance: 0,
  loanAmount: 0,
  loanPurpose: "",
};
const initialCustomerState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

interface WithdrawAction {
  type: "withdraw";
  payload: number;
}

interface DepositAction {
  type: "deposit";
  payload: number;
}

interface LoanAction {
  type: "loan";
  payload: { loanAmount: number; loanPurpose: string };
}

interface PayLoanAction {
  type: "payLoan";
}

type Action = WithdrawAction | DepositAction | LoanAction | PayLoanAction;

function reducer(state: AppState = initialState, action: Action): AppState {
  switch (action.type) {
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "loan":
      return {
        ...state,
        balance: state.balance + action.payload.loanAmount,
        loanPurpose: action.payload.loanPurpose,
        loanAmount: action.payload.loanAmount,
      };
    case "payLoan":
      return {
        ...state,
        loanAmount: 0,
        loanPurpose: "",
        balance: state.balance - state.loanAmount,
      };
    default:
      return state;
  }
}

/********************************************** */

interface customerAction {
  type: string;
  payload: { fullName: string; nationalId: string; createdAt: string };
}

function customerReducer(state = initialCustomerState, action: customerAction) {
  switch (action.type) {
    case "addCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "editCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };

    default:
      return state;
  }
}

/********************************************** */

//const customerStore = createStore(customerReducer);

const rootReducer = combineReducers({
  account: reducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

function deposit(amount: number): DepositAction {
  return { type: "deposit", payload: amount };
}

function withdraw(amount: number): WithdrawAction {
  return { type: "withdraw", payload: amount };
}

function requestLoan(loanAmt: number, purpose: string): LoanAction {
  return {
    type: "loan",
    payload: { loanAmount: loanAmt, loanPurpose: purpose },
  };
}

function payLoan(): PayLoanAction {
  return { type: "payLoan" };
}

//***********************************************************************//
function addCustomer(userName: string, id: string) {
  return {
    type: "addCustomer",
    payload: {
      fullName: userName,
      nationalId: id,
      createdAt: Date.now().toString(),
    },
  };
}

function editCustomer(userName: string, id: string) {
  return {
    type: "editCustomer",
    payload: {
      fullName: userName,
      nationalId: id,
      createdAt: Date.now().toString(),
    },
  };
}

//***********************************************************************//

store.dispatch(deposit(500));
console.log(store.getState());

store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(200, "to buy a car"));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());
//***********************************************************************//

store.dispatch(addCustomer("bhargavi", "123456"));
console.log(store.getState());

store.dispatch(editCustomer("bhargavi boorada", "123456"));
console.log(store.getState());
