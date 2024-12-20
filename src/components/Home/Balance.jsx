import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Balance = () => {
  const { type, balance } = useSelector((state) => state.auth.userData);
  return (
    <div className="stats bg-neutral text-neutral-content">
      <div className="stat">
        <div className="stat-title">Account Type</div>
        <div className="stat-value">{type}</div>
        {type === "User" && (
          <div className="stat-actions">
            <Link to="/cash-in" className="btn btn-sm btn-success">
              Cash In
            </Link>
          </div>
        )}
      </div>

      <div className="stat">
        <div className="stat-title">Current balance</div>
        <div className="stat-value">{balance.toFixed(2)}/=</div>
        {type === "User" && (
          <div className="stat-actions">
            <Link to="cash-out" className="btn btn-sm">
              Cash Out
            </Link>
            <Link to="send-money" className="btn btn-sm">
              Send Money
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Balance;
