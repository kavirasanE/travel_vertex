import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="py-2 min-h-screen flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center">Sign Up</h1>
        <form className="max-w-md mx-auto">
            <input type="text" placeholder="Enter your name"/>
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="password" />
          <button
            className="bg-red-400 rounded-2xl p-2
         text-white w-full"
          >
            Login
          </button>
          <div className="text-center py-2 text-gray-500">
            Already a member? <Link to={'/login'} className="underline text-black/50"> Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
