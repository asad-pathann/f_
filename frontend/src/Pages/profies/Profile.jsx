import React, { useEffect } from "react";
import { IoCameraSharp, IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdEdit, MdKeyboardArrowDown } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { PiLineSegmentsThin } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";
import { BsGridFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  // Agar state mein user data aaya hai toh wo use hoga, warna logged-in user
  const item = location.state || {};

  console.log(item);
  const currentProfile = Object.keys(item).length > 0 ? item : user;

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const username = currentProfile?.name || "User Name..";
  const friendsCount = currentProfile?.friendsCount || 0;
  const profilePic = currentProfile?.profilePicture || "/asad.jpeg";

  return (
    <>
      <div className="bg-white">
        {/* ================= COVER PHOTO ================= */}
        <div className="w-[100%] xl:w-[70%] p-4 rounded-b-md mx-auto flex flex-row-reverse items-end h-[40vh] relative bg-gradient-to-t from-gray-400 to-blue-500">
          <div className="flex gap-1 bg-gray-50 rounded-md p-2 items-center cursor-pointer shadow-md hover:bg-gray-100 transition">
            <IoCameraSharp size={20} />
            <p className="hidden lg:block font-medium text-sm">
              Add Cover Photo
            </p>
          </div>
        </div>

        {/* ================= PROFILE HEADER INFO ================= */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between w-[100%] xl:w-[70%] xl:mx-auto px-10 pb-4">
          <div className="flex flex-col lg:flex-row items-center w-full gap-5">
            {/* Avatar Container */}
            <div className="-translate-y-16 relative">
              <div className="h-[180px] w-[180px] border-4 border-white bg-gray-200 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                {profilePic ? (
                  <img
                    src={profilePic}
                    alt={username}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaUser size={110} color="gray" />
                )}
              </div>
              <div className="absolute right-2 bottom-2 h-[36px] w-[36px] rounded-full bg-gray-200 border-2 border-white flex items-center justify-center cursor-pointer hover:bg-gray-300 transition">
                <IoCameraSharp size={18} />
              </div>
            </div>

            {/* Name and Friend Count */}
            <div className="flex flex-col -translate-y-10 lg:translate-y-0 text-center lg:text-left">
              <p className="text-3xl font-bold text-gray-900">
                {item?.f_name} {item?.l_name}
              </p>
              <p className="text-gray-500 font-medium">
                {friendsCount} friends
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-2 -translate-y-5 lg:translate-y-0">
            <button className="bg-blue-500 hover:bg-blue-600 transition rounded-md px-4 py-2 text-white font-semibold whitespace-nowrap shadow-sm">
              + Add to story
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 transition rounded-md px-4 py-2 font-semibold text-gray-800 whitespace-nowrap">
              <MdEdit className="inline mr-1" /> Edit profile
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 transition rounded-md p-2.5 text-gray-800">
              <MdKeyboardArrowDown size={18} />
            </button>
          </div>
        </div>

        {/* ================= TABS NAVIGATION ================= */}
        <ul className="flex items-center w-[100%] xl:w-[70%] mx-auto gap-7 text-gray-600 font-semibold pt-1 border-t border-t-gray-200 px-4">
          <li className="p-2 py-3 cursor-pointer text-blue-500 border-b-4 border-b-blue-500">
            Posts
          </li>
          <li className="p-2 py-3 hover:bg-gray-100 hover:rounded-md cursor-pointer transition">
            About
          </li>
          <li className="p-2 py-3 hover:bg-gray-100 hover:rounded-md cursor-pointer transition">
            Friends
          </li>
          <li className="p-2 py-3 hover:bg-gray-100 hover:rounded-md cursor-pointer transition">
            Photos
          </li>
          <li className="cursor-pointer flex items-center justify-center px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition ms-auto">
            <BiDotsHorizontalRounded size={20} />
          </li>
        </ul>
      </div>

      {/* ================= MAIN CONTENT SECTION ================= */}
      <div className="grid grid-cols-12 p-4 gap-4 w-full xl:w-[70%] mx-auto bg-[#f0f2f5] min-h-screen">
        {/* Left Sidebar (Intro Only) */}
        <div className="lg:col-span-5 col-span-12 flex flex-col gap-4">
          <div className="rounded-md p-5 shadow-sm bg-white">
            <p className="font-bold text-xl mb-4">Intro</p>
            <div className="flex flex-col gap-3">
              <button className="w-full rounded-md bg-gray-200 hover:bg-gray-300 font-semibold py-2 transition">
                Add Bio
              </button>
              <button className="w-full rounded-md bg-gray-200 hover:bg-gray-300 font-semibold py-2 transition">
                Edit details
              </button>
            </div>
          </div>
        </div>

        {/* Right Feed Column */}
        <div className="lg:col-span-7 col-span-12 flex flex-col gap-4">
          {/* Create Post Input Box */}
          <div className="rounded-md p-4 shadow-sm bg-white">
            <div className="flex items-center gap-3">
              <div className="h-[40px] w-[40px] bg-gray-200 rounded-full flex items-center justify-center overflow-hidden shrink-0">
                {profilePic ? (
                  <img
                    src={profilePic}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaUser size={22} color="gray" />
                )}
              </div>
              <input
                type="text"
                placeholder={`What's on your mind, ${username.split(" ")[0]}?`}
                className="rounded-full bg-[#f0f2f5] hover:bg-gray-200 transition w-full p-2.5 px-4 outline-none border-none text-[15px] text-gray-700 cursor-pointer"
              />
            </div>
            <hr className="my-3 border-gray-200" />

            <div className="grid grid-cols-2 text-center">
              <div className="flex items-center justify-center hover:bg-gray-100 px-2 gap-2 py-2 rounded-lg cursor-pointer transition">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png"
                  alt="Media"
                  className="w-6 h-6"
                />
                <p className="text-gray-600 font-semibold text-sm">
                  Photo/video
                </p>
              </div>
              <div className="flex items-center justify-center hover:bg-gray-100 px-2 gap-2 py-2 rounded-lg cursor-pointer transition">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/pkbalDbTOVI.png"
                  alt="Life"
                  className="w-6 h-6"
                />
                <p className="text-gray-600 font-semibold text-sm">
                  Life event
                </p>
              </div>
            </div>
          </div>

          {/* Filter Bar Header */}
          <div className="rounded-md shadow-sm bg-white overflow-hidden">
            <div className="flex items-center justify-between pt-3 px-4 pb-2">
              <p className="font-bold text-xl text-gray-900">Posts</p>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1 rounded-md bg-gray-200 hover:bg-gray-300 font-semibold text-sm px-3 py-2 transition text-gray-800">
                  <PiLineSegmentsThin className="stroke-[2]" /> Filters
                </button>
                <button className="flex items-center gap-1 rounded-md bg-gray-200 hover:bg-gray-300 font-semibold text-sm px-3 py-2 transition text-gray-800">
                  <IoIosSettings /> Manage Posts
                </button>
              </div>
            </div>
            <hr className="border-gray-200" />

            {/* View Grid Switchers */}
            <div className="flex items-center justify-center">
              <button className="flex items-center justify-center gap-2 w-full hover:bg-gray-50 p-3 text-blue-500 font-semibold text-sm border-b-4 border-blue-500">
                <IoMenu size={18} /> List View
              </button>
              <button className="flex items-center justify-center gap-2 w-full hover:bg-gray-50 p-3 text-gray-600 font-semibold text-sm border-b-4 border-transparent">
                <BsGridFill size={16} /> Grid view
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
