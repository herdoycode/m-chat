import { useContext } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { AuthContext } from "./contexts/AuthContext";

const RenderLayout = () => {
  const { user } = useContext(AuthContext);
  if (user) return <Layout />;
  return <Login />;
};

const RenderLogin = () => {
  const { user } = useContext(AuthContext);
  if (user) return <Layout />;
  return <Login />;
};

const RenderRegister = () => {
  const { user } = useContext(AuthContext);
  if (user) return <Layout />;
  return <Register />;
};

const router = createBrowserRouter([
  { path: "/", element: <RenderLayout /> },
  { path: "/login", element: <RenderLogin /> },
  { path: "/register", element: <RenderRegister /> },
]);

export default router;
