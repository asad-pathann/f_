import React from "react";
import ReelSidebar from "./ReelSidebar";
import ReelMainContent from "./ReelMainContent";
import Navbar from "../../Commpent/auth/homeCommpent/Navbar";

const Reels = () => {
  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-12  ">
        <div className="w-full hidden lg:block md:col-span-3">
          <ReelSidebar />
        </div>
        <div className="col-span-12 lg:col-span-9">
          <ReelMainContent />
        </div>
      </div>
    </>
  );
};

export default Reels;
