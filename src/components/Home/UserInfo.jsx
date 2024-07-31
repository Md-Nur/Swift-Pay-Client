import { useSelector } from "react-redux";

const UserInfo = () => {
  const { userData } = useSelector((state) => state.auth);

  return (
    <div className="overflow-x-auto bg-base-300 p-5 rounded-xl">
      <table className="table">
        {/* head */}
        <tbody>
          <tr className="hover">
            <td className="text-bold">Name</td>
            <td>{userData.name}</td>
          </tr>
          <tr className="hover">
            <td className="text-bold">Email</td>
            <td>{userData.email}</td>
          </tr>
          <tr className="hover">
            <td className="text-bold">Mobile Number</td>
            <td>{userData.mobileNumber}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserInfo;
