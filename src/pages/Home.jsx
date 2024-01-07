import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Featured from "../components/Featured";
import PropertyList from "../components/PropertyList";
import HotelLists from "../components/HotelLists";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <h1 className="mt-24 absolute font-bold text-3xl md:text-4xl ml-8">Top place for You</h1>
      <div className="mt-[180px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[30px] mx-8">
        <Featured />
        <Featured />
        <Featured />
      </div>
      <PropertyList />
      <HotelLists />
      <Footer />
    </div>
  );
};

export default Home;
