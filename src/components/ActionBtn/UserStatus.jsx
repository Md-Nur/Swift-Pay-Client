import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UserStatus = ({ user }) => {
  const { register, handleSubmit } = useForm();
  const [accountStatus, setAccountStatus] = useState(user.accountStatus);

  const openModal = () => {
    document.getElementById(`account-status-${user._id}`).showModal();
  };

  const onSubmit = (data) => {
    toast.loading("Please wait...");
    axios
      .patch(`/users/status/${user._id}`, data)
      .then((res) => {
        setAccountStatus(res.data.data.accountStatus);
        toast.dismiss();
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(
          error?.response?.data?.data ||
            error?.message ||
            "Something went wrong"
        );
      });
    document.getElementById(`account-status-${user._id}`).close();
  };

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className={`btn btn-sm ${
          accountStatus === "Active" ? "btn-success" : "btn-error"
        }`}
        onClick={openModal}
      >
        {accountStatus}
      </button>
      <dialog id={`account-status-${user._id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <p className="py-4">Press ESC key or click on ✕ button to close</p>

          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Active</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio"
                  defaultChecked={accountStatus === "Active"}
                  {...register("accountStatus")}
                  value="Active"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Block</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio"
                  defaultChecked={accountStatus === "Blocked"}
                  {...register("accountStatus")}
                  value="Blocked"
                />
              </label>
            </div>
            <button type="submit" className="btn btn-success">
              Save
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default UserStatus;
