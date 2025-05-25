import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { RiHome6Fill } from "react-icons/ri";
import {
  FaBell,
  FaFacebookMessenger,
  FaUser,
  FaUserGroup,
} from "react-icons/fa6";
import {
  MdArrowDropDown,
  MdGridOn,
  MdOutlineOndemandVideo,
} from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { navdata } from "./date/navbarData";
import GridMinu from "./rightsid/GridMinu";
import AccountSetting from "./AccountSetting";

const Navbar = () => {
  const [focus, setfocus] = useState(false);
  const [openminu, setopenminu] = useState(false);
  const [openAccount, setopenaccount] = useState(false);
  window.addEventListener("click", () => {
    setopenminu(false);
    setopenaccount(false);
  });
  return (
    <>
      <div className="fixed top-0 left-0 bg-transparent min-h-screen"></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex justify-between items-center shadow-md "
      >
        {/* start div logo */}
        <div
          className={`flex   gap-2 items-center shadow-gray-200 shadow-2xl rounded-md p-2 transition-shadow duration-150 ${
            focus ? "shadow-gray-400 p-4 transition-all" : "shadow-gray-200"
          }`}
        >
          {/* arrow */}
          <div
            className={`hover:bg-gray-400 w-[20px] transition-all  ${
              focus ? "opacity-100 translate-x-5" : "opacity-0 translate-x-20"
            } duration-150 text-gray-600 h-[20px]  relative rounded-full flex items-center justify-center`}
          >
            <HiOutlineArrowNarrowLeft size={40} className={``} />
          </div>

          <img
            className={`transition-transform duration-150 ${
              focus ? "scale-0" : "scale-100"
            }`}
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
            width={"40px"}
            alt=""
          />

          <div className="flex items-center gap-2 bg-[#F0F2F5] rounded-full p-2 max-w-[300px] flex-grow">
            <IoSearchSharp size={20} className="ms-1 text-gray-600" />
            <input
              onBlur={() => setfocus(false)}
              onFocus={() => setfocus(true)}
              type="text"
              placeholder="Search Facebook"
              className="outline-0 hidden md:block flex-grow min-w-0"
            />
          </div>
        </div>

        {/* minu item */}
        <ul className="flex gap-2 unstyled max-[950px]:hidden text-gray-800">
          {navdata.map((item, index) => {
            return (
              <li
                key={index}
                className="cursor-pointer text-gray-700 relative group hover:bg-gray-100 rounded-md  py-3 px-10"
              >
                {item?.icons}
                <div className="absolute top-full left-1/2  transition-all  duration-200  delay-100  -translate-x-1/2 group-hover:opacity-100 opacity-0 bg-black text-white px-3 py-1  rounded-full text-sm">
                  {item.title}
                </div>
              </li>
            );
          })}
        </ul>

        {/* right  minu items   */}

        <div className="flex gap-2  p-3  ">
          {/* grid icons first  */}
          <div className="relative">
            <div
              onClick={() => setopenminu(!openminu)}
              className={`h-[35px] w-[35px] rounded-md cursor-pointer relative  flex items-center justify-center ${
                openminu
                  ? "bg-[#E9F3FD] text-blue-700  hover:bg-gray-200 "
                  : "bg-gray-300 "
              }`}
            >
              <MdGridOn size={22} className="text-black font-bold" />
              {/* grid mihu aconsu  */}
            </div>
            {openminu && <GridMinu />}
          </div>
          <div className="h-[35px] w-[35px]  rounded-md cursor-pointer  bg-gray-300  flex items-center justify-center">
            <FaFacebookMessenger size={22} className="text-black font-bold" />
          </div>
          <div className="h-[35px] w-[35px]  rounded-md cursor-pointer   bg-gray-300  flex items-center justify-center">
            <FaBell size={22} className="text-black font-bold" />
          </div>
          <div className="h-[35px] w-[35px]   rounded-md cursor-pointer relative   bg-gray-300  flex items-center justify-center">
            <FaUser
              onClick={() => setopenaccount(!openAccount)}
              size={22}
              className="text-black font-bold  "
            />

            <div className="flex items-center  justify-center font-semibold  text-white -bottom-1 -right-0 text-xs h-[15px] absolute w-[15px] rounded-full bg-gray-500">
              <MdArrowDropDown size={20} />
            </div>
            {openAccount && <AccountSetting />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
