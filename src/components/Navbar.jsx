import React from "react";

const Navbar = () => {
  return (
    <>
    <div className=" flex flex-row justify-between p-5 px-16 font-bold text-black  ">
      <div className="flex items-center">
        <h1 className="text-4xl ">TripView.</h1>
      </div>
      <div className=" flex items-center text-xl">
        <ul className="flex  flex-row gap-6 ">
          <li>Discover</li>
          <li>Reviews</li>
          <li>Trip List</li>
        </ul>
      </div>
      <div className="flex-items-center ">
        <button className=" px-4 py-2  bg-white hover:bg-black hover:text-white  rounded-full  ">
          Sign In
        </button>
      </div>
    </div>
  
    </>
     
  );
};

export default Navbar;
