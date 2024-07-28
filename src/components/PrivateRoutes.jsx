import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoutes = ({ children }) => {
  const authStatus = useSelector((state) => state.auth.status);
  const location = useLocation();
  const navigate = useNavigate();

  // console.log(location.pathname);

  if (authStatus) {
    return children;
  } else {
    toast.error("You have to login to access this page");

    return <Navigate to="/login" state={location.pathname} />;
  }
};

export default PrivateRoutes;
