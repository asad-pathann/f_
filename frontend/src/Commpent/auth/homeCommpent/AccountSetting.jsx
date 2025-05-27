import React, { useState } from "react";
import { FaUser, FaUsersGear } from "react-icons/fa6";
import { AiFillSetting } from "react-icons/ai";
import { RiArrowRightWideFill, RiFileWarningFill } from "react-icons/ri";
import { BsFillMoonFill, BsQuestionCircleFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { Link } from "@mui/material";

const AccountSetting = () => {
  const [openAccount, setopenaccount] = useState(false);
  return (
    <>
      <div
        className="  p-5 rounded-md absolute  top-full w-[400px] z-999 bg-white -translate-x-1/2 shadow-gray-600 shadow-lg "
        style={{
          zIndex: 999,
        }}
      >
        <div className="p-4 rounded-md shadow-xl">
          <div className="flex items-center gap-1  hover:bg-gray-200 p-2 rounded-md  ">
            <div className=" flex h-[40px] w-[40px] justify-center items-center bg-gray-200  rounded-full ">
              <FaUser size={20} />
            </div>
            <div className="text-lg font-semibold text-gray-700">Username</div>
          </div>
          <hr className="h-[1px] my-1  bg-gray-300 border-0 " />

          <div className="bg-gray-200 rounded-md hover:bg-gray-400">
            <div className="flex items-center justify-center gap-1 p-2  ">
              <FaUsersGear />
              <h4>See all profiles</h4>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex justify-between items-center my-3 p-2 rounded-md  hover:bg-gray-200 ">
          {/* setting div */}
          <div className="flex gap-2 my-2  items-center ">
            <div className="flex h-[30px] w-[30px] bg-gray-300 items-center justify-center  rounded-full ">
              <AiFillSetting />
            </div>
            <h3 className=" font-semibold ">Setting & privicy</h3>
          </div>
          <RiArrowRightWideFill size={20} />
        </div>
        <div className="flex justify-between items-center my-3 p-2 rounded-md  hover:bg-gray-200 ">
          {/* setting div */}
          <div className="flex gap-2   items-center ">
            <div className="flex h-[30px] w-[30px] bg-gray-300 items-center justify-center  rounded-full ">
              <BsQuestionCircleFill />
            </div>
            <h3 className=" font-semibold ">Help & support</h3>
          </div>
          <RiArrowRightWideFill size={20} />
        </div>
        <div className="flex justify-between items-center my-3 p-2 rounded-md  hover:bg-gray-200 ">
          {/* setting div */}
          <div className="flex gap-2   items-center ">
            <div className="flex h-[30px] w-[30px] bg-gray-300 items-center justify-center  rounded-full ">
              <BsFillMoonFill />
            </div>
            <h3 className=" font-semibold ">Display & accessibility</h3>
          </div>
          <RiArrowRightWideFill size={20} />
        </div>

        {/* <div className="flex gap-2   items-center ">
            
            <h3 className=" font-semibold ">Display & accessibility</h3>
            <p>CTRL B </p>
          </div> */}
        {/* lOIN */}
        <div className="flex items-center gap-3 p-2 my-3 p-2 rounded-md  hover:bg-gray-200 ">
          <div className="flex h-[30px] w-[30px] bg-gray-300 items-center justify-center  rounded-full ">
            <RiFileWarningFill />
          </div>
          <div>
            <h3 className="font-semibold">Give FeedBack</h3>
            <p className="text-sm text-gray-600">CTRL B </p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-2 my-3 p-2 rounded-md  hover:bg-gray-200 ">
          <div className="flex h-[30px] w-[30px] bg-gray-300 items-center justify-center  rounded-full ">
            <HiOutlineLogout />
          </div>
          <Link to={"/"}>
            <h4 className="font-semibold ">
              <span className="text-black ">Log Out</span>
            </h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AccountSetting;
