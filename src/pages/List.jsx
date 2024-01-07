import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import HotelCard from "../components/utils/HotelCard";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [opendate, setOpendate] = useState(false);
     
  return (
    <div>
      <Navbar />
      <Searchbar />
      <div className="flex justify-start ml-20 gap-12 mt-[150px]">
        <div className="w-[140%] max-w-sm  flex ">
          <div className="flex-1  rounded-lg sticky  top-[10px]">
            <div className="bg-red-100 rounded-lg">
              <h1 className="text-lg font-semibold subpixel-antialiased mb-10 mt-2 text-center p-[10px] ">
                Search
              </h1>
              <div className="flex flex-col gap-[5px] mb-[10px] px-10">
                <label className="text-lg">Destination</label>
                <input
                  type="text"
                  placeholder={destination}
                  className="text-gray-900 h-[30px]  p-2 rounded-md outline-none border-red-400 border-2"
                />
              </div>
              <div className="flex flex-col gap-[5px] mb-[10px] px-10">
                <label className="text-lg">Check-In </label>
                <span
                  onClick={() => {
                    setOpendate(!opendate);
                  }}
                  className="h-[30px] p-[5px] bg-white flex  items-center cursor-pointer rounded-md outline-none border-red-400 border-2"
                >
                  {" "}
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyy"
                  )}`}
                </span>
                {opendate && (
                  <DateRange
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                  />
                )}
              </div>
              <div className="flex flex-col gap-[5px] mb-[10px] px-10">
                <label>Price Range </label>
                <div className=" flex justify-between mb-[10px] font-medium">
                  <span>
                    {" "}
                    Min price <small>per night</small>{" "}
                  </span>
                  <input
                    type="number"
                    className="w-[150px]  rounded-md outline-none border-red-400 border-2 px-2"
                  />
                </div>
                <div className="flex justify-between mb-[10px] font-medium">
                  <span>
                    {" "}
                    Max price <small>per night</small>{" "}
                  </span>
                  <input
                    type="number"
                    className="w-[150px] rounded-md outline-none border-red-400 border-2 px-2"
                  />
                </div>
                <div className="flex justify-between mb-[10px] font-medium">
                  <span> Adult</span>
                  <input
                    type="number"
                    className="w-[150px] rounded-md outline-none border-red-400 border-2 px-2 "
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
                <div className="flex justify-between mb-[10px] font-medium">
                  <span> Children </span>
                  <input
                    type="number"
                    className="w-[150px] rounded-md outline-none border-red-400 border-2 px-2 "
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div className="flex justify-between mb-[10px] font-medium">
                  <span> Room </span>
                  <input
                    type="number"
                    className="w-[150px] rounded-md outline-none border-red-400 border-2 px-2"
                    placeholder={options.room}
                    min={1}
                  />
                </div>

                <button
                  type="button"
                  className="p-[10px] my-5 bg-red-400 border-none flex justify-center items-center rounded-lg font-bold"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-3 ">
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default List;
