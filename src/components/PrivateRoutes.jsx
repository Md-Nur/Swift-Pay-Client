import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoutes = ({ children }) => {
  const authStatus = useSelector((state) => state.auth.status);
  const location = useLocation();
  const navigate = useNavigate();
  
  if (authStatus) {
    return children;
  } else {
    toast.error("You have to login to access this page");
    location.state = location.pathname;
    navigate("/login");
  }
};

export default PrivateRoutes;
