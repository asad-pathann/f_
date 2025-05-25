import React from "react";
import { IoMdSearch } from "react-icons/io";
import { gird_data } from "../date/Griddata";
import { create_data } from "../date/createData";

const GridMinu = () => {
  return (
    <>
      <div className="bg-gray-100 px-5 top-full h-[80vh] rounded-md overflow-y-scroll w-max -translate-x-[500px]  absolute">
        <h3 className="text-[25px] font-bold sticky   p-2  z-999 bg-gray-100   top-0 self-start">
          Minu
        </h3>

        <div className="grid  w-[600px] grid-cols-1 md:grid-cols-3  gap-4">
          <div className="md:col-span-2  bg-white p-5">
            <div className="flex gap-1 items-center  bg-gray-300 p-2 rounded-full ">
              <IoMdSearch size={20} />
              <input
                type="text"
                placeholder="Sreach Mibu"
                className="outline-0 "
              />
            </div>

            <ol className="flex flex-col gap-2 unstyled my-4  ">
              {gird_data?.slice(0, 8).map((item, index) => {
                return (
                  <div key={index}>
                    <li className="font-semibold text-xl mb-3 capitalize text-gray-700">
                      {item?.title}
                    </li>

                    {item?.list?.map((item2, index2) => {
                      return (
                        <div
                          className="flex gap-2 hover:bg-gray-200 p-2 rounded-md cursor-pointer "
                          key={index2}
                        >
                          <img
                            src={item2.image}
                            width={30}
                            alt=""
                            style={{
                              backgroundSize: "covers",
                              backgroundPosition: "center center ",
                            }}
                            className="object-contain"
                          />
                          <div className="flex flex-col mb-2  ">
                            <h3 className="font-semibold ">{item2.heading}</h3>
                            <p className="text-gray-500 text-sm">
                              {item2.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                    <hr className="h-[1px] bg-gray-300 border-0" />
                  </div>
                );
              })}
            </ol>
          </div>
          <div className="md:col-span-1 sticky top-[49px] bg-white p-3 h-fit">
            <h3>Create</h3>
            <ol className="unstyled ">
              {create_data?.map((item, index) => {
                return (
                  <div key={index}>
                    <li key={index} className=" ">
                      <div className="flex gap-2 items-center">
                        <div className="h-[40px] w-[40px] my-1    bg-gray-200 rounded-full flex items-center  justify-center ">
                          {item?.icons}
                        </div>
                        <h5 className="text-lg text-gray-700 font-semibold capitalize">
                          {item?.title}
                        </h5>
                      </div>
                    </li>
                    {index === 3 && (
                      <hr className="h-[1px] bg-gray-500 border-0 my-2 " />
                    )}
                  </div>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridMinu;
