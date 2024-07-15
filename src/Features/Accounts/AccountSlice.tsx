import { createStore } from "redux";

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

export default function AccountReducer(
  state: AppState = initialState,
  action: Action
): AppState {
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

export function deposit(amount: number) {
  return { type: "deposit", payload: amount };
  /*  if (currency === "USD") { 
    
  }
   return async (dispatch: any, getState: any) => {
    const data = await fetch(
      `https://api.frankfurter.app/latest?amount=10&from=GBP&to=USD`
    );
    const res = await data.json();
    console.log(res);
    const converted = 1234;

    dispatch({ type: "deposit", payload: converted });
  }; */
}

export function withdraw(amount: number) {
  return { type: "withdraw", payload: amount };
}

export function requestLoan(loanAmt: number, purpose: string) {
  return {
    type: "loan",
    payload: { loanAmount: loanAmt, loanPurpose: purpose },
  };
}

export function payLoan() {
  return { type: "payLoan" };
}

/* store.dispatch(deposit(500));
console.log(store.getState());

store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(200, "to buy a car"));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());
 */
