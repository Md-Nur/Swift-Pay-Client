import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import UserApproval from "../components/ActionBtn/UserApproval";

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/users")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((error) => {
        toast.error(
          error?.response?.data?.data ||
            error?.message ||
            "Something went wrong"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <section className="w-full">
      <h1 className="font-bold text-5xl my-10 text-center">All Users</h1>
      <div className="overflow-x-auto max-w-6xl mx-auto my-10">
        <table className="table table-xs sm:table-sm md:table-md lg:table-lg">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Approval</th>
              <th>Status</th>
              <th>Type</th>
              {/* <th>Balance</th> */}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{users.indexOf(user) + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobileNumber}</td>
                <td>
                  <UserApproval user={user} />
                </td>
                <td>{user.accountStatus}</td>
                <td>{user.type}</td>
                {/* <td>{user.balance.toFixed(2)}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageUser;
