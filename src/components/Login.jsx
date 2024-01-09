import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="py-2 min-h-screen flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center">Login</h1>
        <form className="max-w-md  mx-auto">
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="password" />
          <button
            className="bg-red-400 rounded-2xl p-2
         text-white w-full"
          >
            Login
          </button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet? <Link to={'/register'} className="underline text-black/50"> Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
