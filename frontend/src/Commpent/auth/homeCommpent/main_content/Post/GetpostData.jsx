import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { SlLike } from "react-icons/sl";
import { PiShareFatThin } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa";
import moment from "moment";
import EmojiSection from "./emoji/EmojiSection";
import { useDispatch } from "react-redux";
import { GetReactionData } from "../../../../../feature/User/post/postSLice";
import axios from "axios";
import { set } from "mongoose";

const GetpostData = ({
  background,
  caption,
  _id,
  user_id,
  createAt,
  postImage,
}) => {
  const dispach = useDispatch();

  const handleReaction = () => {
    const Post_id = {
      _id,
    };
    dispach(GetReactionData(Post_id));
  };

  const [like, setlike] = useState([]);

  const getLikes = async () => {
    const response = await axios.get(
      `http://localhost:5441/api/posts/GetLike/${_id}`
    );
    setlike(response.data);
    // console.log(response.data);
  };
  useEffect(() => {
    getLikes();
  }, []);
  // console.log(like);

  return (
    <>
      <div className="bg-white shadow-xl my-4 rounded-md xl:w-[75%] mx-auto lg:w-[80%] md:w-[90%] w-[95%] ">
        <div className="flex items-center p-2   justify-between ">
          <div className="flex items-center gap-2 ">
            <img
              src="https://scontent.fisb2-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=cp0_dst-png_s40x40&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeE4k3L8ZsghWzF33Sdp_WdiWt9TLzuBU1Ba31MvO4FTUP4kRzna6o-EsUcralqwFHuvv98U8bd7rAJr6BktvdpR&_nc_ohc=oeYRy7vfWswQ7kNvwHDdDdS&_nc_oc=AdlUIlO1wo-mysMA0eU77beCZ6zwK0ILtt645pZPxPpdhDI_J3Mf1ciVbgR70EZg-a8&_nc_zt=24&_nc_ht=scontent.fisb2-1.fna&oh=00_AfMWkXP86Oia5a_eI07AGsYYinmwn-Q-i2VrngdgsPjpfw&oe=68799B3A"
              alt=""
              className="rounded-full h-[50px] w-[50px] p-1"
            />
            <div className="flex flex-col ">
              <h2 className="text-md  font-semibold  text-gray-700">
                username
              </h2>
              <div className="flex gap-[4px] items-center ">
                <p className="text-sm text-gray-500">
                  {moment(createAt).format("DD MMM YYYY, hh:mm A")}
                  {/* e.g., "26 Jul 2025, 04:15 PM" */}
                </p>

                <p className="text-sm text-gray-500">.</p>
                <CiGlobe className="text-sm text-gray-500" />
              </div>
            </div>
          </div>

          <div className="flex gap-1 items-center">
            <BsThreeDots />
            <IoCloseSharp size={25} className="text-gray-600" />
          </div>
        </div>
        <p
          className={`${
            background?.startColor == "#ffffff"
              ? "text-black text-2xl font-semibold first-letter:uppercase ml-[2px]"
              : "hidden"
          }`}
        >
          {caption}{" "}
        </p>
        <div
          style={{
            backgroundImage: background?.image
              ? `url(${background.image}), url(${postImage})`
              : postImage
              ? `url(${postImage})`
              : background?.startColor && background?.endColor
              ? `linear-gradient(${background.startColor}, ${background.endColor})`
              : "none",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: background?.image ? "cover, cover" : "cover",
          }}
          className={`object-contain relative ${
            background?.startColor !== "#ffffff" || background?.image
              ? "h-[400px]"
              : "h-0"
          }`}
        >
          <p
            className={`  text-3xl text-white ${
              background?.startColor != "#ffffff" || background.image != ""
                ? " absolute top-1/2 left-1/2 -translate-x-1/2"
                : "hidden"
            }`}
          >
            {caption}
          </p>
        </div>
        <div className="my-2 flex items-center justify-between">
          <h3 className="text-sm font-semibold flex items-center gap-2 text-gray-700">
            {(() => {
              const seen = new Set();

              return like
                .map((item) => {
                  if (!item?.type || seen.has(item?.type)) return null;
                  seen.add(item?.type);

                  switch (item?.type) {
                    case "wow":
                      return (
                        <picture key="wow">
                          <source
                            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f631/512.webp"
                            type="image/webp"
                          />
                          <img
                            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f631/512.gif"
                            alt="😱"
                            width="32"
                            height="32"
                          />
                        </picture>
                      );
                    case "haha":
                      return (
                        <span key="haha" className="text-2xl">
                          😂
                        </span>
                      );
                    case "like":
                      return (
                        <picture key="like">
                          <source
                            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d/512.webp"
                            type="image/webp"
                          />
                          <img
                            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d/512.gif"
                            alt="👍"
                            width="30"
                            height="30"
                          />
                        </picture>
                      );
                    case "engry":
                      return (
                        <picture key="engry">
                          <source
                            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f620/512.webp"
                            type="image/webp"
                          />
                          <img
                            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f620/512.gif"
                            alt="😠"
                            width="32"
                            height="32"
                          />
                        </picture>
                      );
                    case "love":
                      return (
                        <picture key="love">
                          <source
                            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f/512.webp"
                            type="image/webp"
                          />
                          <img
                            src="https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f/512.gif"
                            alt="❤"
                            width="32"
                            height="32"
                          />
                        </picture>
                      );
                    default:
                      return null;
                  }
                })
                .filter((el) => el !== null);
            })()}
            {like.length} Reaction
          </h3>
        </div>
        <hr className="h-[1px] text-gray-400 " />
        <div className="flex p-2   justify-between items-center">
          <div className="flex gap-2 items-center">
            {/* <SlLike size={20} /> */}
            <EmojiSection post_id={_id} like={like} />
            {/* <h4 className="font-semibold text-gray-600">Like</h4> */}
          </div>
          <div className="flex gap-2 items-center">
            <FaRegComment size={20} />
            <h4 className="font-semibold text-gray-600">comment</h4>
          </div>
          <div className="flex gap-2 items-center">
            <PiShareFatThin size={20} />
            <h4 className="font-semibold text-gray-600">Shere</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetpostData;
