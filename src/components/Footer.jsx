import React from "react";

const Footer = () => {
  return (
    <>
    <div className="bg-amber-100 p-10 ">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-between ">
        <ul className=" grid items-center text-start justify-center">
          <li>Hotels</li>
          <li>Cities</li>
          <li>Districts</li>
          <li>Region</li>
        </ul>
        <ul className=" grid items-center text-start justify-center">
        <li>Hotels</li>
          <li>Cities</li>
          <li>Districts</li>
          <li>Region</li>
        </ul>

        <ul className=" grid items-center text-start justify-center">
        <li>Hotels</li>
          <li>Cities</li>
          <li>Districts</li>
          <li>Region</li>
        </ul>
        <ul className=" grid items-center text-start justify-center">
        <li>Hotels</li>
          <li>Cities</li>
          <li>Districts</li>
          <li>Region</li>
        </ul>
      </div>
      
    </div>
    <div className="border-b-2 border-black mx-4"></div>
    <div className="flex items-center justify-center mb-2 bg-amber-100 p-2 text-sm">
    {" "}
    Copyright @2024 VertexView Solutions
  </div>
  </>
  );
};

export default Footer;
