import React from "react";
import { FriendsSidebar } from "../Friend/FriendsSidebar";
import { FaVideo } from "react-icons/fa6";

export const VidiosSideBar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4 py-3 bg-white rounded-xl shadow-sm  shadow dark:border-gray-700">
        {/* Left — Title with accent bar */}
        <div className="flex items-center gap-3">
          <span className="w-1 h-7 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></span>
          <h3 className="text-2xl font-bold text-gray-800 tight">Videos</h3>
        </div>

        {/* Right — Icon Button */}
        <button className="group relative flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
          <FaVideo
            size={22}
            className="group-hover:scale-110 transition-transform duration-300"
          />

          {/* subtle glow ring on hover */}
          <span className="absolute inset-0 rounded-xl bg-blue-400 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></span>
        </button>
      </div>

      <ul className="flex flex-col items-center mt-6 gap-1">
        {FriendsSidebar.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center w-full p-1 hover:bg-gray-100 rounded-md cursor-pointer"
          >
            <div className="flex items-center gap-2 ">
              <div className="flex gap-2 items-center justify-center h-[40px] w-[40px] rounded-full bg-gray-200">
                {item.icon}
              </div>
              <span className="text-lg text-gray-800 font-semibold ">
                {item.title}
              </span>
            </div>
            <div className="text-gray-500">
              {item.icons_2 && <div>{item.icons_2}</div>}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default VidiosSideBar;
