import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface AppState {
  balance: number;
  loanAmount: number;
  loanPurpose: string;
  isLoading: boolean;
}

const initialState: AppState = {
  balance: 0,
  loanAmount: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    /* deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    }, */
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    loanRequest: {
      prepare(loanAmount, loanPurpose) {
        return { payload: { loanAmount, loanPurpose } };
      },

      reducer(state, action: any) {
        if (state.loanAmount > 0) return;
        state.loanAmount = action.payload.loanAmount;
        state.loanPurpose = action.payload.loanPurpose;
        state.balance += action.payload.loanAmount;
      },
    },
    payLoan(state) {
      state.balance -= state.loanAmount;
      state.loanAmount = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deposit.pending, (state: any) => {
      state.isLoading = true;
    });
    builder.addCase(deposit.fulfilled, (state: any, action: any) => {
      console.log(action.payload);
      state.balance += action.payload;
      state.isLoading = false;
    });
    builder.addCase(deposit.rejected, (state: any) => {
      state.isLoading = false;
    });
  },
});

export const deposit = createAsyncThunk(
  "account/deposit",
  async ({ amount, currency }: { amount: number; currency: string }) => {
    if (currency === "USD") {
      return amount;
    }
    const response = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await response.json();
    console.log(data.rates.USD);
    return data.rates.USD;
  }
);

/* export function deposit(amount: number, currency: string): DepositAction {
  //return { type: "deposit", payload: amount };
  if (currency === "USD") {
    return { type: "deposit", payload: amount };
  }
    tyyt
  return async (dispatch: any, getState: any) => {
    dispatch({ type: "account/convertingCurrency" });
    const data = await fetch(
      `https://api.frankfurter.app/latest?amount=10&from=GBP&to=USD`
    );
    const res = await data.json();
    console.log(res);
    const converted = 1234;

    dispatch({ type: "deposit", payload: converted });
  };
} */

//console.log(accountSlice);

export const { withdraw, loanRequest, payLoan } = accountSlice.actions;

export default accountSlice.reducer;
