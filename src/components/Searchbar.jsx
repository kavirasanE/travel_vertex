import { FaSearch } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdOutlineBedroomChild } from "react-icons/md";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import videobg from "../assets/videobg.mp4";
import { useNavigate } from "react-router-dom";
import { IoPerson } from "react-icons/io5";


const Searchbar = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [destination,setDestination] =useState(" ");
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [openoptions, setOpenoptions] = useState(false);
  const handleOption = (name, operation) => {
    setOptions((change) => {
      return {
        ...change,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const navigate = useNavigate();
  const handleSearch = () => {
   navigate("/hotels", {state :{destination,date,options}})
  }
  return (
    <div className="mt-12">
    <div className="flex justify-center">
      <h1 className="text-4xl md:text-5xl font-extrabold subpixel-antialiased">Explore More</h1>
    </div>
      <div className="m-2 flex flex-row items-center justify-center ">
        <div className=" bg-white border-2
         border-gray-400  rounded-3xl p-5 md:px-2 lg:px-0 md:p-0 px-18  w-full md:w-auto mt-6 mx-2  ">
          <div className=" flex flex-col md:flex-row items-center  w-full gap-1 ml-2">
            <div className="flex items-center justify-center p-2 gap-2 border-b-2 md:border-none ">
              <FaSearch />
              <input
                className=" outline-none border-none mr-2 "
                type="text"
                placeholder="Search for Hotels"
                onChange={ (e) => setDestination (e.target.value)}
              />
            </div>
            <div className="flex
             items-center gap-2 mr-6 p-2 md:p-0 border-b-2 md:border-none">
              <SlCalender size={20} className=" lg:m-1"/>
              <span
                className="text-gray-500 cursor-pointer text-sm  "
                onClick={() => setOpen(!open)}
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {open && (
                <DateRange
                  className="absolute mt-[24rem] z-20"
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="flex items-center gap-2 my-2 mr-6  p-1 md:p-0  border-b-2 md:border-none">
              <MdOutlineBedroomChild size={20}/>
              <span
                className="text-gray-500 cursor-pointer"
                onClick={() => setOpenoptions(!openoptions)}
              >
                {`${options.adult}adult.${options.children}children.${options.room}room`}
              </span>

              {openoptions && (
                <div className="z-20 absolute mt-[180px]  bg-white text-gray-800  rounded-md shadow-lg ">
                  <div className="flex justify-between m-3">
                    <span>Adult</span>
                    <div className="flex items-center gap-4 text-md text-black">
                      <button
                        className="w-[30px] h-[30px] border-2 items-center bg-black text-white rounded-full "
                        onClick={() => handleOption("adult","d")}
                        disabled={options.adult <= 1}
                      >
                        -
                      </button>
                      <span>{options.adult}</span>
                      <button
                        className="w-[30px] h-[30px] border-2 items-center bg-black text-white rounded-full "
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between m-3">
                    <span>Children</span>
                    <div className="flex items-center gap-4 text-md text-black">
                      <button
                        className="w-[30px] h-[30px] border-2 items-center bg-black text-white rounded-full "
                        onClick={() => handleOption("children", "d")}
                        disabled={options.children <= 0}
                      >
                        -
                      </button>
                      <span>{options.children}</span>
                      <button
                        className="w-[30px] h-[30px] border-2 items-center bg-black text-white rounded-full "
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between m-3">
                    <span>Room</span>
                    <div className="flex items-center gap-4 text-md text-black">
                      <button
                        className="w-[30px] h-[30px] border-2 items-center bg-black text-white rounded-full "
                        onClick={() => handleOption("room", "d")}
                        disabled={options.room <= 1}
                      >
                        -
                      </button>
                      <span>{options.room}</span>
                      <button
                        className="w-[30px] h-[30px] border-2 items-center bg-black text-white rounded-full "
                        onClick={() => handleOption("room", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-1 border-2 rounded-full px-4 bg-red-400">
              <button type="button" className="p-2" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
