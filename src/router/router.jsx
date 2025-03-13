import Layout from "../component/layout/Layout";
import Login from "../pages/login/Login";
import Portal from "../pages/portal/Portal";

export const ROUTES = [
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/portal",
    element: <Portal />,
  },
];