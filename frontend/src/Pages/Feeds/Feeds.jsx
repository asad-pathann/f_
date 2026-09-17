import React from "react";
import FeedsSidebar from "../Feeds/FeedsSideBar";
import FeedsMainContent from "./FeedsMainContent";
import Navbar from "../../Commpent/auth/homeCommpent/Navbar";

const Feeds = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3 hidden lg:block">
          <FeedsSidebar />
        </div>

        <div className="lg:col-span-9 col-span-12">
          <FeedsMainContent />
        </div>
      </div>
    </>
  );
};

export default Feeds;
