import { Link } from "react-router-dom";
import "./Register.scss";
import { useEffect } from "react";
import { useThemeStore } from "../../store";

const Register = () => {
  const mode = useThemeStore((s) => s.mode);
  useEffect(() => {
    const body = document.querySelector("body");
    body?.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <div className="register">
      <div className="box">
        <h1>Register</h1>
        <form>
          <div className="input-item">
            <input type="text" placeholder="Full Name..." />
            {false && <p className="danger">Lorem ipsum dolor sit amet </p>}
          </div>
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
          Already have accoutn? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
