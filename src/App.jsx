import { Outlet } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import getCurrentUser from "./utils/getUser";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import Loading from "./components/Loading";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const userData = await getCurrentUser();
      console.log(userData);
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Loading classes="w-full h-screen" />;
  }
  return (
    <>
      <Navbar>
        <Outlet />
      </Navbar>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </>
  );
}

export default App;
