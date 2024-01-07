import React from "react";
import port from "../assets/portfolio-1.png";

const Featured = () => {
  return (
    <div className="w-[100%] max-width-[1024px] flex justify-between gap-[20px]">
     
      <div className="relative rounded-lg overflow-hidden h-[250px] w-[450px] ">
        <img src={port} alt="img" className="w-[100%] h-[100%] object-cover" />
        <div className="absolute bottom-[20px] left-[20px] text-white text-xl font-medium subpixel-antialiased ">
          <h1 className="">Chennai</h1>
          <h1 className="">Hotels.Resorts</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
