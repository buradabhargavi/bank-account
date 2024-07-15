import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialCustomerState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

/********************************************** */

const customerSlice = createSlice({
  name: "customer",
  initialState: initialCustomerState,
  reducers: {
    addCustomer: {
      prepare(fullName, nationalId) {
        return { payload: { fullName, nationalId } };
      },
      reducer(
        state,
        action: PayloadAction<{ fullName: string; nationalId: string }>
      ) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
      },
    },
    editCustomer: {
      prepare(fullName: string, nationalId: string) {
        return { payload: { fullName, nationalId } };
      },
      reducer(
        state,
        action: PayloadAction<{ fullName: string; nationalId: string }>
      ) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
      },
    },
  },
});

export const { addCustomer, editCustomer } = customerSlice.actions;
export default customerSlice.reducer;
