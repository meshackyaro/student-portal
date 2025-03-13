import Layout from "../component/layout/Layout";
import Login from "../pages/login/Login";

export const ROUTES = [
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];