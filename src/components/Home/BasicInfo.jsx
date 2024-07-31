import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const info = [
  {
    title: "Cash In",
    desc: "Deposit money to your account. No fee is charged for cash in.",
    url: "/cash-in",
  },
  {
    title: "Cash Out",
    desc: "Withdraw money from your account. A fee of 1.5% taka is charged for cash out.",
    url: "/cash-out",
  },
  {
    title: "Send Money",
    desc: "Send money to another user. A fee of 5 taka is charged for sending money over 100 taka. No fee is charged for sending money less than 100 taka.Minimum amount to send is 50 taka.",
    url: "/send-money",
  },
];

const BasicInfo = () => {
  const { userData } = useSelector((state) => state.auth);
  return (
    <div className="flex w-full justify-around flex-wrap my-10">
      {info.map((item, index) => (
        <div
          key={index}
          className="card glass bg-accent text-accent-content w-96"
        >
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p className="text-justify">{item.desc}</p>
            {userData.type === "User" && (
              <div className="card-actions justify-end">
                <Link to={item.url} className="btn">
                  {item.title}
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BasicInfo;
