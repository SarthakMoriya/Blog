import React, { useState } from "react";
import { BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

import loginAnimation from "../assets/loginanimation.gif";
const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleShowpassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    alert("Successfully registered!" + userData.email);
    navigate('/')
  };
  return (
    <div className="pt-16">
      <div className="p3 md:p-4">
        <div className="w-full max-w-sm bg-green-500 m-auto flex justify-center flex-col p-4 items-center">
          <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
            <img src={loginAnimation} alt="" className="w-full" />
          </div>
          <form action="" className="w-full py-2" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full bg-slate-200 px-2 py-1 rounded mt-1 mb-2"
            />

            <label htmlFor="password">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full bg-slate-200 px-2 py-1 rounded mt-1 mb-2"
              />
              <span
                className="absolute top-2 right-2 text-xl cursor-pointer h-full"
                onClick={handleShowpassword}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              >
                <BiShow />
              </span>
            </div>
            <button
              className="w-full max-w m-auto bg-red-500 cursor-pointer text-white text-xl p-2 rounded-full border mt-2"
              type="submit"
            >
              Login
            </button>
          </form>
          <p className="text-white">
            New here ?{" "}
            <Link to="/signup" className="text-black">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
