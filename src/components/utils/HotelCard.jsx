import React from "react";
import port from "../../assets/portfolio-1.png";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import HotelLists from "../HotelLists";

const HotelCard = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/hotels/:id");
  };

  return (
    <>
      <div className="hidden md:flex">
        <div className="my-9 mt-0">
          <div className="m-2 border-gray-200 drop-shadow-2xl border-2 w-[50rem] rounded-xl shadow-lg hover:scale-110 transition-all duration-300">
            <div className=" flex p-2 ">
              <img
                src={port}
                className=" w-[16rem] h-[16rem] object-contain"
                alt="img"
              />
              <div className="flex ">
                <div className=" flex flex-col p-2 ">
                  <h1 className="text-3xl font-bold p-1">Hotel name</h1>
                  <p className="p-5 font-semibold text-lg">Location</p>

                  <button
                    className="border-2  rounded-full bg-red-400 p-2 w-[10rem] mx-6 mt-5"
                    onClick={handleSearch}
                  >
                    Book Now
                  </button>
                </div>
                <div className="flex flex-col p-5 mt-5 ">
                  <button className="border-2  rounded-md bg-black text-white p-2 w-[10rem] mx-6 ">
                    {" "}
                    Price
                  </button>
                  <button className="mt-5 flex  ">
                    <CiStar size={25} /> <CiStar size={25} />
                    <CiStar size={25} />
                    <CiStar size={25} />
                    <CiStar size={25} />
                  </button>
                  <p className="mt-2  text-md text-start">
                    {" "}
                    "It provides various room options, dining facilities,
                    recreational spaces, and often hosts events. Essential
                    services include housekeeping, security, and customer.."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default HotelCard;
