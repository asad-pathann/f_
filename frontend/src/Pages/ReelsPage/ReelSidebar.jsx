import React from "react";
import { RxCross1 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ReelSidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" ">
        <div className="flex  gap-2  items-center p-2 px-4  bg-white   ">
          <div
            onClick={() => navigate(-1)}
            className="h-[40px] w-[40px]  cursor-pointer bg-gray-200 rounded-full  flex items-center justify-center
     "
          >
            <RxCross1 size={20} />
          </div>
          <div
            onClick={() => navigate(-1)}
            className="h-[40px] w-[40px]  bg-gray-100 rounded-full  flex items-center justify-center
     "
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
              alt=""
            />
          </div>
        </div>
        <hr className="bg-gray-200 border border-gray-200 " />
        <div className=" px-4    py-2 ">
          <h3 className="text-2xl font-bold  ">Stories</h3>
          <h6 className="flex items-center gap-3 capitalize text-[#5A64D1] text-md mt-2">
            active . setting
          </h6>
        </div>
        <h2 className="text-lg px-4 capitalize font-semibold mt-3 ">
          your store
        </h2>
        <div className="flex items-center gap-3 px-4 mt-2 ">
          <div className="flex items-center bg-gray-300 justify-center rounded-full h-[50px] w-[50px] ">
            <FaPlus className="text-[#5A64D1]" />
          </div>
          <div className=" flex flex-col gap-1 ">
            <h3 className="text-md font-semibold">Create a store</h3>
            <p className="text-gray-400 text-sm ">
              Share a photo or vedio or white something{" "}
            </p>
          </div>
        </div>
        <div className="flex  flex-col gap-4 px-4  mt-5 ">
          <h3 className=" text-lg font-semibold">All Store</h3>
          <div className="flex items-center gap-3  ">
            <img
              className="h-[50px] w-[50px] rounded-full object-cover"
              src="https://i.pinimg.com/474x/46/1a/4f/461a4f4fcc8e1d9b82b71253e75e7708.jpg?nii=t"
              alt=""
            />
            <div className=" flex flex-col gap-1 ">
              <h3 className="text-md font-semibold">Asad Ullah</h3>
              <p className="text-gray-400 text-sm ">7h</p>
            </div>
          </div>
          <div className="flex items-center gap-3  ">
            <img
              className="h-[50px] w-[50px] rounded-full object-cover"
              src="https://i.pinimg.com/474x/46/1a/4f/461a4f4fcc8e1d9b82b71253e75e7708.jpg?nii=t"
              alt=""
            />
            <div className=" flex flex-col gap-1 ">
              <h3 className="text-md font-semibold">Asad Ullah</h3>
              <p className="text-gray-400 text-sm ">7h</p>
            </div>
          </div>
          <div className="flex items-center gap-3  ">
            <img
              className="h-[50px] w-[50px] rounded-full object-cover"
              src="https://i.pinimg.com/474x/46/1a/4f/461a4f4fcc8e1d9b82b71253e75e7708.jpg?nii=t"
              alt=""
            />
            <div className=" flex flex-col gap-1 ">
              <h3 className="text-md font-semibold">Asad Ullah</h3>
              <p className="text-gray-400 text-sm ">7h</p>
            </div>
          </div>
          <div className="flex items-center gap-3  ">
            <img
              className="h-[50px] w-[50px] rounded-full object-cover"
              src="https://i.pinimg.com/474x/46/1a/4f/461a4f4fcc8e1d9b82b71253e75e7708.jpg?nii=t"
              alt=""
            />
            <div className=" flex flex-col gap-1 ">
              <h3 className="text-md font-semibold">Asad Ullah</h3>
              <p className="text-gray-400 text-sm ">7h</p>
            </div>
          </div>
          <div className="flex items-center gap-3  ">
            <img
              className="h-[50px] w-[50px] rounded-full object-cover"
              src="https://i.pinimg.com/474x/46/1a/4f/461a4f4fcc8e1d9b82b71253e75e7708.jpg?nii=t"
              alt=""
            />
            <div className=" flex flex-col gap-1 ">
              <h3 className="text-md font-semibold">Asad Ullah</h3>
              <p className="text-gray-400 text-sm ">7h</p>
            </div>
          </div>
          <div className="flex items-center gap-3  ">
            <img
              className="h-[50px] w-[50px] rounded-full object-cover"
              src="https://i.pinimg.com/474x/46/1a/4f/461a4f4fcc8e1d9b82b71253e75e7708.jpg?nii=t"
              alt=""
            />
            <div className=" flex flex-col gap-1 ">
              <h3 className="text-md font-semibold">Asad Ullah</h3>
              <p className="text-gray-400 text-sm ">7h</p>
            </div>
          </div>
          <div className="flex items-center gap-3  ">
            <img
              className="h-[50px] w-[50px] rounded-full object-cover"
              src="https://i.pinimg.com/474x/46/1a/4f/461a4f4fcc8e1d9b82b71253e75e7708.jpg?nii=t"
              alt=""
            />
            <div className=" flex flex-col gap-1 ">
              <h3 className="text-md font-semibold">Asad Ullah</h3>
              <p className="text-gray-400 text-sm ">7h</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReelSidebar;
