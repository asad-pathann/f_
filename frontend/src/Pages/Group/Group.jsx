import React from "react";
import GroupSideBar from "./GroupSideBar";
import GroupMainContent from "./GroupMainContent";
import Navbar from "../../Commpent/auth/homeCommpent/Navbar";

const Group = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 mt-2  lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3 hidden lg:block">
          <GroupSideBar />
        </div>
        <div className="lg:col-span-9 col-span-12">
          <GroupMainContent />
        </div>
      </div>
    </>
  );
};

export default Group;
