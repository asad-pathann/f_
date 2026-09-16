import React, { useState } from "react";

const EventMainContent = () => {
  const [activeFilter, setActiveFilter] = useState("Top");

  // Filter Buttons Data
  const filterTabs = ["Top", "Friends", "Following"];

  // Events Dummy Data (Aap isay API ya props se replace kar sakte hain)
  const events = [
    {
      id: 1,
      title: "grand opening in islamabad",
      date: "Fri, 18 Sep at 07:18 PDT",
      location: "Civic Center Bahria Town Islamabad",
      stats: "188 interested · 9 going",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "fArm houses",
      date: "Wed, 30 Sep at 12:00 PDT",
      location: "Lalkurti, Rawalpindi",
      stats: "115 interested · 4 going",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Rm",
      date: "Fri, 9 Oct at 12:00 PDT",
      location: "Lalkurti, Rawalpindi",
      stats: "72 interested · 4 going",
      image:
        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "Traditional wear exhibition",
      date: "Sat, 10 Oct at 00:00",
      location: "Islamabad Expo Center",
      stats: "240 interested · 15 going",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      title: "Interior design showcase",
      date: "Tue, 10 Nov at 00:00",
      location: "Rawalpindi Arts Council",
      stats: "90 interested · 2 going",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      title: "Fabric & Textile Gala",
      date: "Sun, 1 Nov at 11:00 PST",
      location: "Commercial Market, Rawalpindi",
      stats: "310 interested · 25 going",
      image:
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <main className="flex-1 bg-gray-50 min-h-screen overflow-y-scroll h-[500px] p-6 overflow-y-auto">
      {/* Section Title */}
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Discover events</h1>

      {/* Filters Bar */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {/* My Location Dropdown Button */}
        <button className="flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-medium px-4 py-2 rounded-full border border-gray-200 text-sm shadow-sm transition-colors">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>My location</span>
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        {/* Any Date Dropdown Button */}
        <button className="flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-medium px-4 py-2 rounded-full border border-gray-200 text-sm shadow-sm transition-colors">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
            <line x1="16" x2="16" y1="2" y2="6"></line>
            <line x1="8" x2="8" y1="2" y2="6"></line>
            <line x1="3" x2="21" y1="10" y2="10"></line>
          </svg>
          <span>Any date</span>
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        <div className="h-6 w-[1px] bg-gray-300 mx-1 hidden sm:block"></div>

        {/* Filter Pills (Top, Friends, Following) */}
        <div className="flex items-center gap-2">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              {/* Event Image & Menu Button */}
              <div className="relative h-48 w-full bg-gray-200">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-3 right-3 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="5" cy="12" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="19" cy="12" r="2" />
                  </svg>
                </button>
              </div>

              {/* Event Details */}
              <div className="p-4">
                <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-1">
                  {event.date}
                </p>
                <h3 className="text-base font-bold text-gray-900 mb-1 line-clamp-1">
                  {event.title}
                </h3>
                <p className="text-xs text-gray-500 mb-2">{event.location}</p>
                <p className="text-xs text-gray-400">{event.stats}</p>
              </div>
            </div>

            {/* Card Action Buttons (Interested & Share) */}
            <div className="p-3 pt-0 flex items-center gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-sm font-medium transition-colors">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>Interested</span>
              </button>

              <button className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl transition-colors shrink-0">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                  <polyline points="16 6 12 2 8 6"></polyline>
                  <line x1="12" x2="12" y1="2" y2="15"></line>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default EventMainContent;
