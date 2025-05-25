import React from "react";
import Navbar from "../../Commpent/auth/homeCommpent/Navbar";
import MainContent from "../../Commpent/auth/homeCommpent/main_content/MainContent";
import AddSection from "../../Commpent/auth/homeCommpent/main_content/AddSection";
import Sidebar from "../../Commpent/auth/homeCommpent/main_content/Sidebar";

const Home = () => {
  return (
    <>
      <div className="bg-white">
        <Navbar />
      </div>
      {/* main content */}
      {/* sidebar  */}
      <div className="grid grid-cols-1 min-h-screen bg-[#F2F4F7] my-1 md:grid-cols-12  ">
        <div className="md:col-span-3  lg:block hidden">
          <Sidebar />
        </div>
        {/* main content */}
        <div className="md:col-span-8 lg:col-span-6 col-span-12">
          <MainContent />
        </div>
        {/* add sectrion */}
        <div className="xl:col-span-3 hidden  md:block lg:col-span-4  ">
          <AddSection />
        </div>
      </div>
    </>
  );
};

export default Home;
