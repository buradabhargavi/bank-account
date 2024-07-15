//The way to use redux before hooks

//import { useSelector } from "react-redux";
import { connect } from "react-redux";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }: any) {
  /*  const accountDetails = useSelector((store: any) => store.account.balance);
  console.log(accountDetails); */
  console.log(balance);
  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapPropsToState(state: any) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapPropsToState)(BalanceDisplay);
