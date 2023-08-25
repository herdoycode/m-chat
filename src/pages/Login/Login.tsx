import { Link } from "react-router-dom";
import "./Login.scss";
import { useEffect } from "react";
import { useThemeStore } from "../../store";

const Login = () => {
  const mode = useThemeStore((s) => s.mode);

  useEffect(() => {
    const body = document.querySelector("body");
    body?.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <div className="login">
      <div className="box">
        <h1>Login</h1>
        <form>
          <div className="input-item">
            <input type="email" placeholder="Email Address" />
            {false && <p className="danger">Lorem ipsum dolor sit amet </p>}
          </div>
          <div className="input-item">
            <input type="password" placeholder="Password...." />
            {false && <p className="danger">Lorem ipsum dolor sit amet </p>}
          </div>
          <button>Register</button>
        </form>
        <p>
          Don't have any accout? <Link to="/register">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
