
import { NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/join">Join</NavLink>
      </li>
    </>
  );
};

export default NavList;
