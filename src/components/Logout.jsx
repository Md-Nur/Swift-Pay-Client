import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { toast } from "react-toastify";

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        toast.loading("Logging Out...");
        axios
          .get("/users/logout")
          .then((res) => {
            dispatch(logout());
            toast.dismiss();
            toast.success(res.data.message);
          })
          .catch((e) => {
            toast.dismiss();
            toast.error(e.response.data.data || e.message);
          });
      }}
    >
      Logout
    </button>
  );
};

export default Logout;
