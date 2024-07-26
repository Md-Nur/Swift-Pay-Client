import { Link } from "react-router-dom";

const RouteLabel = ({ to, label }) => {
  return (
    <label className="label justify-center gap-2">
      {label}
      <Link to={to} className="link link-hover capitalize link-primary">
        {to.split("/")[1]}
      </Link>
    </label>
  );
};

export default RouteLabel;
