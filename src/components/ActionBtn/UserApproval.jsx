import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const UserApproval = ({ user }) => {
  const [userApproval, setUserApproval] = useState(user.isApproved);

  const openModal = () => {
    if (!userApproval)
      document.getElementById(`user-approval-${user._id}`).showModal();
    // else toast.error("This transaction is already approved");
  };

  const handleApprove = () => {
    // Your logic here
    axios
      .patch(`/users/approve/${user._id}`)
      .then(async (res) => {
        toast.success(res.data.message);
        setUserApproval(true);
      })
      .catch((error) => {
        toast.error(
          error?.response?.data?.data ||
            error?.message ||
            "Something went wrong"
        );
      });
    document.getElementById(`user-approval-${user._id}`).close();
  };

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        onClick={openModal}
        className={`btn btn-sm ${
          !userApproval ? "btn-warning" : "btn-success"
        }`}
      >
        {userApproval ? "Approved" : "Disapprove"}
      </button>
      <dialog id={`user-approval-${user._id}`} className="modal">
        <div className="modal-box">
          <p className="py-4">Are you sure want to approve this user?</p>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <button className="btn btn-success" onClick={handleApprove}>
              Approve
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default UserApproval;
