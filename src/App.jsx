import { Outlet } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";

function App() {
  return (
    <>
      <Navbar>
        <Outlet />
      </Navbar>
    </>
  );
}

export default App;
