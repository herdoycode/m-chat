import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const auth = localStorage.getItem("token");

const RenderLayout = () => {
  if (auth) return <Layout />;
  return <Login />;
};

const RenderLogin = () => {
  if (auth) return <Layout />;
  return <Login />;
};

const RenderRegister = () => {
  if (auth) return <Layout />;
  return <Register />;
};

const router = createBrowserRouter([
  { path: "/", element: <RenderLayout /> },
  { path: "/login", element: <RenderLogin /> },
  { path: "/register", element: <RenderRegister /> },
]);

export default router;
