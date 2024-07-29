import { NavLink } from "react-router-dom";
import Logout from "../Logout";
import { useSelector } from "react-redux";

const NavList = () => {
  const authStatus = useSelector((state) => state.auth.status);
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {authStatus ? (
        <>
          <li>
            <Logout />
          </li>
          <li>
            <NavLink to="/send-money">Send Money</NavLink>
          </li>
          <li>
            <NavLink to="/cash-out">Cash Out</NavLink>
          </li>
          <li>
            <NavLink to="/cash-in">Cash In</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/join">Join</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
    </>
  );
};

export default NavList;
