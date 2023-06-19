import React, { useState } from "react";
import { BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import ImageToBase64 from "../util/ImageToBase64";

import loginAnimation from "../assets/loginanimation.gif";
const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userImage, setUserImage] = useState("");

  const handleShowpassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFileUpload = async (e) => {
    console.log(e.target.files[0]);
    const data = await ImageToBase64(e.target.files[0]);
    setUserImage(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { firstName, lastName, email, password };
    alert("Successfully registered!", userData);
    navigate("/login");
  };
  return (
    <div className="pt-16">
      <div className="p3 md:p-4">
        <div className="w-full max-w-sm bg-green-500 m-auto flex justify-center flex-col p-4 items-center">
          <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md ">
            <img
              src={userImage ? userImage : loginAnimation}
              alt=""
              className="w-full h-full"
            />
            <label htmlFor="profileImage" className="cursor-pointer">
              <div className="absolute bottom-0 h-1/3 bg-slate-300 w-full text-center bg-opacity-50">
                <p className="text-sm p-1 ">Upload</p>
              </div>
              <input
                type="file"
                id="profileImage"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          </div>
          <form action="" className="w-full py-2" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="w-full bg-slate-200 px-2 py-1 rounded mt-1 mb-2"
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              name="lastName"
              className="w-full bg-slate-200 px-2 py-1 rounded mt-1 mb-2"
            />
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
              SignIn
            </button>
          </form>
          <p className="text-white">
            Already registered ?{" "}
            <Link to="/login" className="text-black">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
