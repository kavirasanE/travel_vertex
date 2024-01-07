import React from "react";
import Navbar from "../components/Navbar";
import { FaRegHeart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { FaPencilAlt } from "react-icons/fa";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];
  const handleopen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const prevSlide = () => {
    setSlideNumber(slideNumber === 0 ? photos.length - 1 : slideNumber - 1);
  };
  const nextSlide = () => {
    setSlideNumber(slideNumber === photos.length - 1 ? 0 : slideNumber + 1);
  };

  return (
    <div className="top-0">
      <Navbar />
      <div className=" border-b-2 mx-10 border-slate-400 " />
      {open && (
        <div className="absolute top-50 backdrop-opacity-10 backdrop-invert bg-black/50">
          <div className="sticky left-0 w-[100%] h-[100vh] p-10 z-[999] flex items-center justify-between gap-5">
            <MdOutlineClose
              size={50}
              className="absolute top-10 right-20 cursor-pointer  hover:bg-black hover:text-white"
              onClick={() => {
                setOpen(false);
              }}
            />
            <IoIosArrowBack
              size={50}
              className="cursor-pointer hover:bg-black hover:text-white"
              onClick={prevSlide}
            />
            <div className="w-[60%] h-[50%] flex justify-center items-center">
              <img src={photos[slideNumber].src} />
            </div>
            <IoIosArrowForward
              size={50}
              className="cursor-pointer  hover:bg-black hover:text-white"
              onClick={nextSlide}
            />
          </div>
        </div>
      )}
      <div className="m-4 xl:mx-24 ">
        <div className="flex items-center justify-between border-b-2 border-black/40">
          <h1 className="text-2xl md:text-3xl font-bold">
            {" "}
            Holiday Inn Chennai
          </h1>
          <span>
            <FaRegHeart size={25} />
          </span>
        </div>
        <div className="my-2 flex flex-col md:flex-row  md:items-center justify-start md:gap-20 gap-2">
          <button className="flex items-center ">
            <CiStar size={20} /> <span className="text-sm ">2097 Reviews</span>
          </button>
          <p className="mr-20 md:text-md text-sm">
            {" "}
            #29 of 566 hotels in Chennai
          </p>
        </div>
        <div className=" flex flex-col md:flex-row items-center justify-between  gap-4 md:gap-0">
          <a className="xl:text-lg md:text-sm text-sm">
            #110 Rajiv Gandhi Salai, Old Mahabalipuram Rd,Chennai,India
          </a>
          <button className="rounded-full bg-red-400 p-2 w-[10rem] mx-6 ">
            Book now
          </button>
        </div>
        <div className="flex  flex-col md:flex-row justify-between md:place-items-center ">
          <div className=" flex flex-col md:flex-row md:items-center   my-2 xl:gap-10 md:gap-4  text-md ">
            <a className="font-semibold xl:text-lg md:text-sm text-sm">
            
              Visit Hotel Website
            </a>
            <span className="flex gap-1 items-center md:text-md text-sm">
              <LuPhone /> 000 809284739846
            </span>
            <span className="flex gap-1 items-center md:text-md text-sm">
              <FaPencilAlt /> Write a Review
            </span>
          </div>
          <div className="md:mx-20 text-center ">
            <p className="text-xl font-semibold ">Price</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between py-4">
          {photos.map((photo, i) => (
            <div key={i} className="w-[33%]">
              <img
                src={photo.src}
                alt="image"
                onClick={() => handleopen(i)}
                className="cursor-pointer"
              />
            </div>
          ))}
        </div>

        <div className="my-6">
          <h1 className="font-bold text-xl">About</h1>
          <div className=" md:mx-8 ">
            <p className="my-2 md:text-start line-clamp-5 ">
              "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
              Street Apartments has accommodations with air conditioning and
              free WiFi. The units come with hardwood floors and feature a fully
              equipped kitchenette with a microwave, a flat-screen TV, and a
              private bathroom with shower and a hairdryer. A fridge is also
              offered, as well as an electric tea pot and a coffee machine.
              Popular points of interest near the apartment include Cloth Hall,
              Main Market Square and Town Hall Tower. The nearest airport is
              John Paul II International Kraków–Balice, 16.1 km from Tower
              Street Apartments, and the property offers a paid airport shuttle
              service."
            </p>
            <h1 className="text-xl font-semibold py-4">Reviews</h1>
            <textarea
              className=" md:w-4/6 w-full h-24 p-4 border-slate-400 rounded-md border-2"
              placeholder="Write a Review"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Hotel;
