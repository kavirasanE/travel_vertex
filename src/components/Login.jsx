import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate =useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try{
      await axios.post("/api/user/login", data);
      alert("login sucessful");
      navigate("/")
      
    } catch (e) {
      alert("login Failed")
    }
    

  }
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="py-2 min-h-screen flex items-center justify-around">
        <div className="mb-64">
          <h1 className="text-4xl text-center">Login</h1>
          <form className="max-w-md  mx-auto" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full border my-2  py-2 px-3 rounded-2xl"
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full border my-2  py-2 px-3 rounded-2xl"
            />
            <button
              className="bg-red-400 rounded-2xl p-2
         text-white w-full"
            >
              Login
            </button>
            <div className="text-center py-2 text-gray-500">
              Don't have an account yet?{" "}
              <Link to={"/register"} className="underline text-black/50">
                {" "}
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
