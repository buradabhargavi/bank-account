import CreateCustomer from "./Features2/Customers2/CreateCustomer2";
import Customer from "./Features2/Customers2/Customer2";
import AccountOperations from "./Features2/Accounts2/AccountOperations2";
import BalanceDisplay from "./Features2/Accounts2/BalanceDisplay2";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector((store: any) => store.customer.fullName);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {!fullName ? (
        <CreateCustomer />
      ) : (
        <>
          {" "}
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
