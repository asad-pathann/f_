import React from "react";
import EventMainContent from "./EventMainContent";
import EventsSideBar from "./EventsSideBar";
import Navbar from "../../Commpent/auth/homeCommpent/Navbar";

const EventsPage = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className=" hidden lg:block lg:col-span-3">
          <EventsSideBar />
        </div>

        <div className="col-span-12 lg:col-span-9">
          <EventMainContent />
        </div>
      </div>
    </>
  );
};

export default EventsPage;
