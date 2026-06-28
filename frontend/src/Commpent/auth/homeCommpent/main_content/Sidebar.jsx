import React, { useEffect, useState } from "react";
import { RiFileWarningFill } from "react-icons/ri";
import { TbUserFilled } from "react-icons/tb";
import { LuCircleUserRound } from "react-icons/lu";
import { gird_data } from "../date/Griddata";
import { useSelector } from "react-redux";
import { animate, motion } from "framer-motion";
import { MdKeyboardArrowUp } from "react-icons/md";
import { sidebarData } from "./../date/sidebarData/SidebarData";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const [open, setopen] = useState(false);

  console.log(user);

  return (
    <>
      <div className="min-h-screen bg-gray-100 ">
        <div className="flex">
          <div className="flex items-center gap-3  p-2 w-full rounded-md  ">
            <img
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
              width={40}
              className="rounded-full overflow-hidden   object-cover"
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
          className="flex flex-col gap-2 p-2 overflow-y-scroll hide_scroll h-[80vh] hide_scroll unstyled my-1 "
        >
          {sidebarData
            ?.slice(0, open ? sidebarData?.length : 9)
            .map((item, index) => {
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
                  <h3 className="text-sm font-semibold">{item?.heading}</h3>
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
