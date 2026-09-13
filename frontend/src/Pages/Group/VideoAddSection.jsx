import React from "react";

const VideoAddSection = () => {
  return (
    <>
      <div className=" p-4 overflow-y-scroll  min-h-96 hide_scroll ">
        <h2 className=" text-gray-500  font-semibold">Sponsored</h2>

        <div className="flex flex-col items-center mt-10 ">
          <div className="">
            <div className="flex items-center justify-center  w-full  gap-2 ">
              <img className="h-[160px] object-cover" src="/asad.jpeg" alt="" />
              <div className="flex flex-col">
                <h5 className="text-[15px] font-semibold">
                  <span className="uppercase">metro</span> pakistan pvd..
                  limited
                </h5>
                <p className="tect-sm text-gray-500">metro.online.pk</p>
              </div>
            </div>
          </div>
          <hr className="h-[1px] border-0 bg-gray-600" />
          <div className="my-6 ">
            <div className="flex items-center justify-center gap-3 ">
              <div className="border border-gray-300 rounded-md w-full">
                <video controls className="w-[100px] h-[100px]">
                  <source src="/vedeo1.mp4" type="video/mp4" />
                  Your browser does not support video.
                </video>
              </div>
              <div className="flex flex-col">
                <h5 className="text-sm font-semibold ">
                  <span className="uppercase">unlock</span> your potential with
                  up PKR 18000 of ....
                </h5>
                <p className="tect-sm text-gray-500">metro.online.pk</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-[1px] border-0 bg-gray-600" />
      </div>
    </>
  );
};

export default VideoAddSection;
