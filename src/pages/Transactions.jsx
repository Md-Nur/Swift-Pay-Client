import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import TransactionApproval from "../components/ActionBtn/TransactionApproval";

export const transactionMethods = {
  cashIn: "Cash In",
  cashOut: "Cash Out",
  sendMoney: "Send Money",
};

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userData } = useSelector((state) => state.auth);

  useEffect(() => {
    setLoading(true);
    axios
      .post("/transaction", userData)
      .then((res) => {
        setTransactions(res.data.data);
      })
      .catch((error) => {
        toast.error(
          error?.response?.data?.data ||
            error?.message ||
            "Something went wrong"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="w-full">
        <h1 className="font-bold text-5xl my-10 text-center">Transactions</h1>
        <Loading />
      </section>
    );
  } else if (transactions.length === 0) {
    return (
      <section className="w-full">
        <h1 className="font-bold text-5xl my-10 text-center">Transactions</h1>
        <h2 className="text-center text-2xl">No transactions yet</h2>
      </section>
    );
  }

  return (
    <section className="w-full">
      <h1 className="font-bold text-5xl my-10 text-center">Transactions</h1>
      <div className="overflow-x-auto max-w-6xl mx-auto my-10">
        <table className="table table-xs sm:table-sm md:table-md lg:table-lg">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Transaction Id</th>
              <th>From</th>
              <th>To</th>
              <th>Methode</th>
              <th>Amount</th>
              <th>Fee</th>
              <th>Add/Reduce</th>
              {userData.type !== "User" && <th>Status</th>}
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction._id}>
                <td>{transactions.indexOf(transaction) + 1}</td>
                <td>{transaction._id}</td>
                <td>{transaction.reqPhone}</td>
                <td>{transaction.resPhone}</td>
                <td>{transactionMethods[transaction.method]}</td>
                <td>{transaction.amount}/=</td>
                <td>{transaction.fee}/=</td>
                <td
                  className={
                    // Logic for color add or remove to total amount
                    (transaction.method === "cashIn" &&
                      userData.mobileNumber === transaction.reqPhone) ||
                    (transaction.method == "cashOut" &&
                      userData.type === "Agent") ||
                    (transaction.method == "sendMoney" &&
                      userData.mobileNumber === transaction.resPhone)
                      ? "text-success"
                      : "text-error"
                  }
                >
                  {transaction.amount +
                    (userData.type === "User" &&
                    transaction.method === "sendMoney" &&
                    userData.mobileNumber === transaction.resPhone
                      ? 0
                      : transaction.fee)}
                  /=
                </td>
                {userData.type !== "User" && (
                  <td>
                    <TransactionApproval transaction={transaction} />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Transactions;
