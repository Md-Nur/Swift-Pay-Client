import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Join from "./pages/Join";
import PrivateRoutes from "./components/PrivateRoutes";
import Login from "./pages/Login";
import SendMoney from "./pages/SendMoney";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        ),
      },
      {
        path: "/join",
        element: <Join />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/send-money",
        element: (
          <PrivateRoutes>
            <SendMoney />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
