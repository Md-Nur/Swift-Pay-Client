import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoutes = ({ children }) => {
  const authStatus = useSelector((state) => state.auth.status);
  const { type } = useSelector((state) => state.auth.userData);
  const location = useLocation();

  // console.log(location.pathname);
  const userPaths =
    location.pathname === "/send-money" ||
    location.pathname === "/cash-out" ||
    location.pathname === "/cash-in";

  if (!authStatus) {
    toast.error("You have to login to access this page");
    return <Navigate to="/login" state={location.pathname} />;
  } else if (userPaths && type !== "User") {
    toast.error("Only user can access this page");
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default PrivateRoutes;
