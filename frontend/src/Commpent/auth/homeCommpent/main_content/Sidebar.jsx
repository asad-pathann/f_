import React from "react";
import { RiFileWarningFill } from "react-icons/ri";
import { TbUserFilled } from "react-icons/tb";
import { LuCircleUserRound } from "react-icons/lu";
import { gird_data } from "../date/Griddata";

const Sidebar = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-200 ">
        <div className="flex">
          <div className="flex items-center gap-3  p-2 w-full rounded-md  hover:bg-gray-200 ">
            <div className="flex h-[50px] w-[50px] bg-gray-300 items-center justify-center  rounded-full ">
              <LuCircleUserRound size={25} />
            </div>
            <div>
              <h3 className="font-semibold">Give FeedBack</h3>
            </div>
          </div>
        </div>
        <ol className="flex flex-col gap-2 overflow-y-scroll h-[98vh] hide_scroll unstyled my-1 ">
          {gird_data?.map((item, index) => {
            return (
              <div key={index}>
                <li className="font-bold text-xl mb-3 capitalize text-gray-700"></li>

                {item?.list?.map((item2, index2) => {
                  return (
                    <div
                      className="flex gap-2  p-2 rounded-md cursor-pointer "
                      key={index2}
                    >
                      <img
                        src={item2.image}
                        width={40}
                        alt=""
                        style={{
                          backgroundSize: "covers",
                          backgroundPosition: "center center ",
                        }}
                        className="object-contain"
                      />
                      <div className="flex flex-col mb-2  ">
                        <h3 className="font-semibold ">{item2.heading}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default Sidebar;
