import React, { useState } from "react";

const GroupMainContent = () => {
  const [activeTab, setActiveTab] = useState("About");
  const [previewMode, setPreviewMode] = useState("desktop");

  const tabs = ["About", "Posts", "Members", "Events"];

  return (
    <main className="flex-1 bg-gray-100 min-h-screen  p-6">
      {/* Outer Preview Wrapper Container */}
      <div
        className={`mx-auto bg-white rounded-2xl overflow-y-scroll  h-[650px] transition-all hide_scroll dur  shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 ${
          previewMode === "desktop" ? "max-w-4xl" : "max-w-md"
        }`}
      >
        {/* Top Preview Bar (Desktop / Mobile View Switcher) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
          <span className="text-sm font-semibold text-gray-800">
            {previewMode === "desktop" ? "Desktop preview" : "Mobile preview"}
          </span>
          <div className="flex items-center gap-2">
            {/* Desktop Icon Button */}
            <button
              onClick={() => setPreviewMode("desktop")}
              className={`p-2 rounded-lg transition-colors ${
                previewMode === "desktop"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </button>

            {/* Mobile Icon Button */}
            <button
              onClick={() => setPreviewMode("mobile")}
              className={`p-2 rounded-lg transition-colors ${
                previewMode === "mobile"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Inner Content Scrollable Area */}
        <div className="p-4 sm:p-6 bg-gray-50">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Cover Illustration Banner */}
            <div className="relative h-60 sm:h-72 w-full bg-gray-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Group Cover Illustration"
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            {/* Group Header Info */}
            <div className="px-6 pt-5 pb-4 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                Group name
              </h1>
              <p className="text-sm text-gray-500 font-medium">
                Group privacy · 1 member
              </p>
            </div>

            {/* Navigation Tabs (About, Posts, Members, Events) */}
            <div className="px-6 flex items-center gap-2 border-b border-gray-200 overflow-x-auto">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-4 font-semibold text-sm relative transition-colors ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <span>{tab}</span>
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-full"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feed / Body Section Below Tabs */}
            <div className="p-6 bg-gray-50 flex flex-col md:flex-row gap-4">
              {/* Write Post Box */}
              <div className="flex-1 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="What's on your mind?"
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm py-2.5 px-4 rounded-full focus:outline-none transition-colors cursor-pointer"
                  readOnly
                />
              </div>

              {/* About Widget Box */}
              <div className="w-full md:w-80 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">About</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Welcome to the group! Connect, share posts, and explore events
                  with other members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GroupMainContent;
