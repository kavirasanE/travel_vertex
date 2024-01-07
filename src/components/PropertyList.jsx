import React from "react";
import port from "../assets/portfolio-1.png";

const PropertyList = () => {
  return (
    <div className="mt-[50px]">
      <div className="flex justify-start mx-10">
        <h1 className="text-2xl font-semibold">Top Categories </h1>
      </div>
      <div className="flex flex-row gap-10 mx-11">
      <div className="w-1/2 h-[20rem] mt-5 ">
          <img
            src={port}
            alt="img"
            className="w-[100%] h-[100%] object-cover overflow-hidden rounded-xl "
          />
          <h1 className="text-xl font-semibold text-center ">Hotels</h1>
          <p className="text-lg text-center font-medium">100 places</p>
        
      </div>
      <div className="w-1/2 h-[20rem] mt-5 ">
          <img
            src={port}
            alt="img"
            className="w-[100%] h-[100%] object-cover overflow-hidden rounded-xl "
          />
          <h1 className="text-xl font-semibold text-center ">Hotels</h1>
          <p className="text-lg text-center font-medium">100 places</p>
        
      </div>
      <div className="w-1/2 h-[20rem] mt-5 ">
          <img
            src={port}
            alt="img"
            className="w-[100%] h-[100%] object-cover overflow-hidden rounded-xl "
          />
          <h1 className="text-xl font-semibold text-center ">Hotels</h1>
          <p className="text-lg text-center font-medium">100 places</p>
        
      </div>
      <div className="w-1/2 h-[20rem] mt-5 ">
          <img
            src={port}
            alt="img"
            className="w-[100%] h-[100%] object-cover overflow-hidden rounded-xl "
          />
          <h1 className="text-xl font-semibold text-center ">Hotels</h1>
          <p className="text-lg text-center font-medium">100 places</p>
        
      </div>
      <div className="w-1/2 h-[20rem] mt-5 ">
          <img
            src={port}
            alt="img"
            className="w-[100%] h-[100%] object-cover overflow-hidden rounded-xl "
          />
          <h1 className="text-xl font-semibold text-center ">Hotels</h1>
          <p className="text-lg text-center font-medium">100 places</p>
        
      </div>
      
     
      
      </div>
    </div>
  );
};

export default PropertyList;
