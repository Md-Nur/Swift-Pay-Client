import { useDispatch, useSelector } from "react-redux";
import getCurrentUser from "../utils/getUser";
import { login } from "../store/authSlice";

const Home = () => {
  const { userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const checkBalance = async () => {
    const currentUser = await getCurrentUser();
    dispatch(login({ userData: currentUser }));
  };
  return (
    <>
      <p>{userData.name}</p>
      <p>{userData.mobileNumber}</p>
      <p>{userData.email}</p>
      <p>{userData.balance}</p>
    </>
  );
};

export default Home;
