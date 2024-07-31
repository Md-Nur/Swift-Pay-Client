import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hero = () => {
  const { userData } = useSelector((state) => state.auth);

  return (
    <div
      className={`hero ${
        userData.type === "Agent"
          ? "bg-info text-info-content"
          : "bg-secondary text-secondary-content"
      } py-10`}
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Swift Pay</h1>
          <Link to="/transactions" className="btn btn-primary my-3">
            See Transactions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
