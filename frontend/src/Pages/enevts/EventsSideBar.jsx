import React, { useState } from "react";

const EventsSideBar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isYourEventsOpen, setIsYourEventsOpen] = useState(false);

  // Main Navigation Items
  const mainNavItems = [
    {
      name: "Home",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
      ),
    },
    {
      name: "Your events",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      hasDropdown: true,
      onClick: () => setIsYourEventsOpen(!isYourEventsOpen),
    },
    {
      name: "Notifications",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      ),
    },
  ];

  // Category Items
  const categoryItems = [
    {
      name: "Classics",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        </svg>
      ),
    },
    {
      name: "Comedy",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" x2="9.01" y1="9" y2="9" />
          <line x1="15" x2="15.01" y1="9" y2="9" />
        </svg>
      ),
    },
    {
      name: "Crafts",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" x2="8.12" y1="4" y2="15.88" />
          <line x1="14.47" x2="20" y1="14.48" y2="20" />
          <line x1="8.12" x2="12" y1="8.12" y2="12" />
        </svg>
      ),
    },
    {
      name: "Dance",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      name: "Drinks",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M17 2H7v10l5 5 5-5V2z" />
          <line x1="12" x2="12" y1="17" y2="22" />
          <line x1="8" x2="16" y1="22" y2="22" />
        </svg>
      ),
    },
    {
      name: "Fitness & workouts",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v8H2z" />
          <line x1="6" x2="6" y1="8" y2="16" />
          <line x1="10" x2="10" y1="8" y2="16" />
          <line x1="14" x2="14" y1="8" y2="16" />
        </svg>
      ),
    },
  ];

  return (
    <aside className="w-80 h-screen bg-white border-r border-gray-200 flex flex-col p-4 select-none overflow-y-auto">
      {/* Header Title */}
      <h1 className="text-2xl font-bold text-gray-900 mb-4 px-2">Events</h1>

      {/* Search Bar */}
      <div className="relative mb-4">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" x2="16.65" y1="21" y2="16.65" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search events"
          className="w-full pl-9 pr-4 py-2.5 bg-gray-100 text-gray-800 text-sm rounded-full focus:outline-none focus:bg-gray-200 transition-colors"
        />
      </div>

      {/* Main Navigation List */}
      <nav className="space-y-1 mb-4">
        {mainNavItems.map((item) => {
          const isActive = activeTab === item.name;
          return (
            <div key={item.name}>
              <button
                onClick={() => {
                  setActiveTab(item.name);
                  if (item.onClick) item.onClick();
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`${isActive ? "text-blue-600" : "text-gray-700"}`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </div>
                {item.hasDropdown && (
                  <svg
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                      isYourEventsOpen ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
              </button>
            </div>
          );
        })}
      </nav>

      {/* Create New Event Button */}
      <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl transition-colors shadow-sm mb-6">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <line x1="12" x2="12" y1="5" y2="19" />
          <line x1="5" x2="19" y1="12" y2="12" />
        </svg>
        <span>Create New Event</span>
      </button>

      {/* Divider */}
      <hr className="border-gray-200 mb-6" />

      {/* Categories Section */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-3 px-2">
          Categories
        </h2>
        <div className="space-y-1">
          {categoryItems.map((category) => (
            <button
              key={category.name}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 shrink-0">
                {category.icon}
              </div>
              <span className="truncate">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default EventsSideBar;
