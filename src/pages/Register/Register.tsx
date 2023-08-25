import { Link } from "react-router-dom";
import "./Register.scss";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { useState } from "react";
import apiClient from "../../services/apiClient";
import { toast } from "react-toastify";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const schema = Joi.object({
  name: Joi.string().required().label("Name"),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .label("Email"),
  password: Joi.string().min(8).required().label("Password"),
});

const Register = () => {
  const [isLoading, setLoading] = useState<Boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: joiResolver(schema) });

  const onSubmit = (data: FormData) => {
    setLoading(true);
    apiClient
      .post("/users", data)
      .then((res) => {
        localStorage.setItem("token", res.headers["x-auth-token"]);
        setLoading(false);
        toast.success("Registered Success!");
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };

  return (
    <div className="register">
      <div className="box">
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-item">
            <input
              {...register("name")}
              type="text"
              placeholder="Full Name..."
            />
            {errors.name && <p className="danger"> {errors.name.message} </p>}
          </div>
          <div className="input-item">
            <input
              {...register("email")}
              type="email"
              placeholder="Email Address"
            />
            {errors.email && <p className="danger"> {errors.email.message} </p>}
          </div>
          <div className="input-item">
            <input
              {...register("password")}
              type="password"
              placeholder="Password...."
            />
            {errors.password && (
              <p className="danger"> {errors.password.message} </p>
            )}
          </div>
          <button> {isLoading ? "Loading..." : "Register"} </button>
        </form>
        <p>
          Already have accoutn? <Link to="/login">Login.</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
