import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const Register = () => {
  const [email,setEmail] =useState("");
  const [password,setPassword] = useState("");
  const [name,setName] = useState("");
  const navigate =useNavigate();
  async function registeruser(e) {
    e.preventDefault();
    try {
      await axios.post('/api/user/register' , {
        name,
        email,
        password,
       });
       navigate('/login');
      alert('Registration sucessful.');
    }catch(e) {
      alert ("Registrtion failed")
    }
  }
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="py-2 min-h-screen flex items-center justify-around">
        <div className="mb-64">
          <h1 className="text-4xl text-center">Sign Up</h1>
          <form className="max-w-md mx-auto" onSubmit={registeruser}>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border my-2  py-2 px-3 rounded-2xl"
              value={name}
              onChange={(e) => {setName(e.target.value)}}
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border my-2  py-2 px-3 rounded-2xl"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
            />
            <input
              type="password"
              placeholder="password"
              className="w-full border my-2  py-2 px-3 rounded-2xl"
              value={password}
              onChange={(e) =>setPassword(e.target.value)}
            />
            <button
              className="bg-red-400 rounded-2xl p-2
         text-white w-full"
            >
              Register
            </button>
            <div className="text-center py-2 text-gray-500">
              Already a member?{" "}
              <Link to={"/login"} className="underline text-black/50">
                {" "}
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
