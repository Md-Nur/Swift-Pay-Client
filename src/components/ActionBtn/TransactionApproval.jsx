import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import getCurrentUser from "../../utils/getUser";
import { login } from "../../store/authSlice";
import { useDispatch } from "react-redux";

const TransactionApproval = ({ transaction }) => {
  const [isPending, setIsPending] = useState(transaction.isPending);
  const dispatch = useDispatch();

  const openModal = () => {
    if (isPending)
      document
        .getElementById(`transaction-verify-${transaction._id}`)
        .showModal();
    else toast.error("This transaction is already approved");
  };

  const handleApprove = () => {
    // Your logic here
    axios
      .post("/transaction/approve", { tranctionId: transaction._id })
      .then(async (res) => {
        const userData = await getCurrentUser();
        if (userData) {
          dispatch(login({ userData }));
        }
        toast.success(res.data.message);
        setIsPending(false);
      })
      .catch((error) => {
        toast.error(
          error?.response?.data?.data ||
            error?.message ||
            "Something went wrong"
        );
      });
    document.getElementById(`transaction-verify-${transaction._id}`).close();
  };
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        onClick={openModal}
        className={`btn btn-sm ${isPending ? "btn-warning" : "btn-success"}`}
      >
        {isPending ? "Pending" : "Clear"}
      </button>
      <dialog id={`transaction-verify-${transaction._id}`} className="modal">
        <div className="modal-box">
          <p className="py-4">Are you sure want to approve this transaction</p>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <button className="btn btn-sm btn-success" onClick={handleApprove}>
              Approve
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default TransactionApproval;
