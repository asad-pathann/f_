import React from "react";
import Navbar from "../../Commpent/auth/homeCommpent/Navbar";
import { FriendsSidebar } from "../Friend/FriendsSidebar";
import { FaVideo } from "react-icons/fa6";
import VidiosSideBar from "../Group/VidiosSideBar";
import VideoAddSection from "../Group/VideoAddSection";
import VedeoMainSection from "./VedeoMainSection";

const Video = () => {
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-12 gap-2 p-2">
        {/* sidebar selection */}
        <div className="lg:col-span-3 lg:block hidden">
          <VidiosSideBar />
        </div>
        {/* ======= end   to friend side section  */}

        {/* main content  data  */}

        <div className="col-span-12 md:col-span-8 lg:col-span-6  w-full   min-h-[90vh]  ">
          <VedeoMainSection />
        </div>

        <div className="  hidden md:block md:col-span-2 bg-white">
          <VideoAddSection />
        </div>
      </div>
    </>
  );
};

export default Video;
