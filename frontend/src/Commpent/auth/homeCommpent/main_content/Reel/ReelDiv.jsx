import React from "react";
import { FaPlus } from "react-icons/fa6";

const ReelDiv = () => {
  return (
    <>
      <div className=" grid lg:grid-cols-4 grid-cols-3   gap-3 h-[200px]">
        <div className="relative shadow-2xl rounded-md overflow-hidden ">
          <div className="h-[ ]">
            <img
              src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
              width={"100%"}
              //   height={"100%"}
              className="  object-cover h-[150px]"
              alt=""
            />
          </div>
          <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 bg-blue-800 p-2  rounded-full border-white border-4 text-white   border-2xl">
            <FaPlus />
          </div>
          <div className="">
            <h4 className="font-semibold text-sm my-2  text-center">
              create story
            </h4>
          </div>
        </div>
        <div className="relative shadow-2xl rounded-md overflow-hidden ">
          <div className="absolute top-[10px] overflow-hidden left-[10px] border border-4 border-blue-500 rounded-full h-[40px] w-[40px]">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
            />
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbkECXtEG_6-RV7CSNgNoYUGZE-JCliYm9g&s"
            width={"100%"}
            className="h-[200px] object-cover"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ReelDiv;
