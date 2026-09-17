import React, { useState } from "react";

const GroupSideBar = () => {
  const [groupName, setGroupName] = useState("");
  const [privacy, setPrivacy] = useState("");
  const [inviteFriends, setInviteFriends] = useState("");

  const suggestedFriends = ["Hasan Ullah", "Hassan Ali", "Haroon Ur Rashid"];

  return (
    <div className=" overflow-y-scroll h-[670px] hide_scroll ">
      <aside className="w-80 h-screen bg-white border-r    border-gray-200 flex flex-col justify-between p-4 select-none overflow-y-auto shadow-sm">
        {/* Top Section */}
        <div className=" p-3 ">
          {/* Breadcrumb */}
          <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
            <span>Groups</span>
            <span>›</span>
            <span className="text-gray-700 font-medium">Create group</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Create group
          </h1>

          {/* User Info / Admin Profile */}
          <div className="flex items-center gap-3 mb-6">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
              alt="Admin"
              className="w-12 h-12 rounded-full object-cover border border-gray-200"
            />
            <div>
              <h3 className="text-sm font-bold text-gray-900 leading-tight">
                Asad Ullah
              </h3>
              <p className="text-xs text-gray-500 font-medium">Admin</p>
            </div>
          </div>

          {/* Form Inputs Container */}
          <div className="space-y-4">
            {/* Group Name Input */}
            <div>
              <input
                type="text"
                placeholder="Group name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                className="w-full px-4 py-3 bg-white text-gray-800 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Privacy Dropdown */}
            <div className="relative">
              <select
                value={privacy}
                onChange={(e) => setPrivacy(e.target.value)}
                className="w-full px-4 py-3 bg-white text-gray-800 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Choose privacy
                </option>
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
              {/* Dropdown Arrow Icon */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>

            {/* Invite Friends Input */}
            <div>
              <input
                type="text"
                placeholder="Invite friends (optional)"
                value={inviteFriends}
                onChange={(e) => setInviteFriends(e.target.value)}
                className="w-full px-4 py-3 bg-white text-gray-800 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Suggested Friends List */}
            <div className="text-xs text-gray-500 px-1 leading-relaxed">
              <span className="font-semibold text-gray-600">Suggested: </span>
              {suggestedFriends.map((friend, index) => (
                <span
                  key={friend}
                  onClick={() => setInviteFriends(friend)}
                  className="cursor-pointer hover:text-blue-600 hover:underline font-medium text-gray-800"
                >
                  {friend}
                  {index < suggestedFriends.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Fixed Create Button */}
        <div className="pt-4 border-t border-gray-100 mt-6">
          <button
            disabled={!groupName.trim()}
            className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all shadow-sm ${
              groupName.trim()
                ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Create
          </button>
        </div>
      </aside>
    </div>
  );
};

export default GroupSideBar;
