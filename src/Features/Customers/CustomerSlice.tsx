const initialCustomerState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

/********************************************** */

interface customerAction {
  type: string;
  payload: { fullName: string; nationalId: string; createdAt: string };
}

export default function customerReducer(
  state = initialCustomerState,
  action: customerAction
) {
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

//const store = createStore(customerReducer);

//***********************************************************************//
export function addCustomer(userName: string, id: string) {
  return {
    type: "addCustomer",
    payload: {
      fullName: userName,
      nationalId: id,
      createdAt: Date.now().toString(),
    },
  };
}

export function editCustomer(userName: string, id: string) {
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

//***********************************************************************//
/* 
store.dispatch(addCustomer("bhargavi", "123456"));
console.log(store.getState());

store.dispatch(editCustomer("bhargavi boorada", "123456"));
console.log(store.getState());
 */
