import React from "react";
import { FaUser } from "react-icons/fa6";
import { LuCircleUserRound } from "react-icons/lu";
import { GrEmoji } from "react-icons/gr";
// import AddpostModel from './AddpostModel';
import AddpostModel from "./AddpostModel"; // ✅ correct for named export
import { motion } from "framer-motion";

const Addpost = () => {
  return (
    <>
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white shadow-xl rounded-md xl:w-[75%] mx-auto lg:w-[80%] md:w-[90%] w-[95%] p-4"
      >
        <div className="flex items-center gap-3   w-full rounded-md ">
          <img
            src="https://scontent.fisb2-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=cp0_dst-png_s40x40&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeE4k3L8ZsghWzF33Sdp_WdiWt9TLzuBU1Ba31MvO4FTUP4kRzna6o-EsUcralqwFHuvv98U8bd7rAJr6BktvdpR&_nc_ohc=oeYRy7vfWswQ7kNvwHDdDdS&_nc_oc=AdlUIlO1wo-mysMA0eU77beCZ6zwK0ILtt645pZPxPpdhDI_J3Mf1ciVbgR70EZg-a8&_nc_zt=24&_nc_ht=scontent.fisb2-1.fna&oh=00_AfMWkXP86Oia5a_eI07AGsYYinmwn-Q-i2VrngdgsPjpfw&oe=68799B3A"
            width={40}
            className="rounded-full"
            alt=""
          />
          <div className="w-full">
            <AddpostModel />
          </div>
        </div>
        <hr className="h-[1px] border-0 bg-gray-300 my-2 " />

        <div className="flex justify-between w-[95%] mx-auto   items-center ">
          <div className="flex hover:bg-gray-100 p-2 rounded-md  justify-center gap-1 items-center">
            <img src="./icons/videoimage.png" width={20} alt="" />
            <h3 className="font-semibold text-gray-500">Live video </h3>
          </div>
          <div className="flex hover:bg-gray-100 p-2 rounded-md  justify-center gap-1 items-center">
            <img src="./icons/imageFacebook.png" alt="" width={20} />
            <h3 className="font-semibold text-gray-500">Photo/video </h3>
          </div>
          <div className="flex hover:bg-gray-100 p-2 rounded-md  justify-center gap-1 items-center">
            <GrEmoji size={25} color="yellow" />
            <h3 className="font-semibold text-gray-500">Fleeling/active</h3>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Addpost;
