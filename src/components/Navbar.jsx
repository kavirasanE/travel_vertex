import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className=" flex flex-row justify-between p-5 px-16 font-bold text-black  ">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl">TripView.</h1>
        </div>
        <div className=" hidden md:flex items-center text-xl">
          <ul className="flex  flex-row gap-6 ">
            <li>Discover</li>
            <li>Reviews</li>
            <li>Trip List</li>
          </ul>
        </div>
        <div className=" hidden md:flex items-center ">
          <button className=" px-4 py-2  bg-white hover:bg-black hover:text-white  rounded-full  ">
            Sign In
          </button>
        </div>
        <div className="flex md:hidden items-center justify-center">
          <RxHamburgerMenu
            size={25}
            onClick={handleOpen}
            className="flex items-center justify-center cursor-pointer"
          />
        </div>
          <div className={ `${open ? "translate-y-0" : "-translate-y-80"} flex absolute flex-col bg-red-400 left-0 right-0 top-20 z-10 p-4  transition-transform  duration-300 `}>
            <div className=" flex justify-center md:hidden items-center text-xl">
              <ul className="flex flex-col gap-6 ">
                <li>Discover</li>
                <li>Reviews</li>
                <li>Trip List</li>
              </ul>
            </div>
            <div className=" md:hidden flex flex-col items-center my-2 p-2 mr-2">
              <button
                className=" px-4 py-2  bg-white hover:bg-black hover:text-white rounded-full  duration-900"
                onClick={() => setOpen(false)}
              >
                Sign In
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
