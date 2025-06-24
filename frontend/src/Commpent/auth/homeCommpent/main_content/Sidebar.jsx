import React, { useState } from "react";
import { RiFileWarningFill } from "react-icons/ri";
import { TbUserFilled } from "react-icons/tb";
import { LuCircleUserRound } from "react-icons/lu";
import { gird_data } from "../date/Griddata";
import { useSelector } from "react-redux";
import { sidebra } from "../date/sidebarData/SidebarData";
import { animate, motion } from "framer-motion";
import { MdKeyboardArrowUp } from "react-icons/md";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const [open, setopen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gray-100 ">
        <div className="flex">
          <div className="flex items-center gap-3  p-2 w-full rounded-md  hover:bg-gray-200 ">
            <img
              src="https://scontent.fisb2-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=cp0_dst-png_s40x40&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeE4k3L8ZsghWzF33Sdp_WdiWt9TLzuBU1Ba31MvO4FTUP4kRzna6o-EsUcralqwFHuvv98U8bd7rAJr6BktvdpR&_nc_ohc=oeYRy7vfWswQ7kNvwHDdDdS&_nc_oc=AdlUIlO1wo-mysMA0eU77beCZ6zwK0ILtt645pZPxPpdhDI_J3Mf1ciVbgR70EZg-a8&_nc_zt=24&_nc_ht=scontent.fisb2-1.fna&oh=00_AfMWkXP86Oia5a_eI07AGsYYinmwn-Q-i2VrngdgsPjpfw&oe=68799B3A"
              width={40}
              className="rounded-full"
              alt=""
            />
            <div>
              <h3 className="font-semibold capitalize">
                {user?.f_name} {user?.l_name}
              </h3>
            </div>
          </div>
        </div>
        <motion.ol
          initial="initial"
          animate="animate"
          variants={{
            initial: {},
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="flex flex-col gap-2 p-2 overflow-y-scroll hide_scroll h-[98vh] hide_scroll unstyled my-1 "
        >
          {sidebra?.slice(0, open ? sidebra?.length : 8).map((item, index) => {
            return (
              <motion.li
                variants={{
                  initial: { x: 40, opacity: 0 },

                  animate: { x: 0, opacity: 1 },
                }}
                key={index}
                className="hover:bg-white p-2  rounded-md cursor-pointer flex items-center gap-2"
              >
                <img src={item?.image} alt="" width={35} />
                <h3 className="text-lg font-semibold">{item?.heading}</h3>
              </motion.li>
            );
          })}
          <li
            onClick={() => setopen(!open)}
            className="flex gap-2 items-center"
          >
            <div className="flex items-center justify-center rounded-full bg-gray-300 h-[30px] w-[30px]">
              <MdKeyboardArrowUp
                size={30}
                className={`${
                  open ? "rotate-180" : "rotate-0"
                } transition-all duration-400`}
              />
            </div>
            <h3 className="font-semibold">{open ? "See Lose" : "see more "}</h3>
          </li>
        </motion.ol>
      </div>
    </>
  );
};

export default Sidebar;
