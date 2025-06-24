import React from "react";
import { GoArrowLeft } from "react-icons/go";
import colors_image from "./data/GridColor";

const BackgroundThem = ({ showBg, setshowBg, chnage, setselectColor }) => {
  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white absolute rounded-md ${
          showBg
            ? "translate-x-0 block transition-all duration-150"
            : "translate-x-full hidden"
        } p-3 h-[80vh] hide_scroll overflow-y-scroll transition-all duration-150  shadow-xl w-[90%] md:w-[60%] xl:w-[35%] `}
      >
        <div
          onClick={() => setshowBg(false)}
          className="grid shadow p-2 items-center grid-cols-3"
        >
          <div className="flex grid-cols-1 items-center justify-center bg-gray-400 rounded-full h-[25px] w-[25px]">
            <GoArrowLeft />
          </div>
          <h2 className="col-span-1 font-semibold capitalize self-start text-center">
            choose background
          </h2>

          <div className="col-span-1"></div>
        </div>

        {colors_image?.map((item, index) => {
          return (
            <div key={index}>
              <h4 className="capitalize font-semibold text-md text-gray-700 ">
                {item?.title}
              </h4>

              <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 rounded-md md:grid-cols-3  ">
                {item?.list.map((item2, index2) => {
                  return (
                    <div
                      onClick={() => {
                        index == 2
                          ? setselectColor({
                              startColor: item2,
                              endColor: item2,
                              image: "",
                            })
                          : setselectColor({
                              startColor: "",
                              endColor: "",
                              image: item2?.image,
                            });

                        setshowBg(false);
                      }}
                      className="h-[80px] bg_div cursor-pointer w-full rounded-md"
                      style={{
                        background:
                          index === 2
                            ? `linear-gradient(${item2})`
                            : `url(${item2?.image})`,
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BackgroundThem;
