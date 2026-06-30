import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { SlLike } from "react-icons/sl";
import { PiShareFatThin } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa";
import moment from "moment";
import EmojiSection from "./emoji/EmojiSection";
import { useDispatch, useSelector } from "react-redux";
import { GetReactionData } from "../../../../../feature/User/post/postSLice";
import axios from "axios";
import { set } from "mongoose";
import CommentModel from "./Comment/CommentModel";

const GetpostData = ({
  background,
  caption,
  _id,
  user_id,
  createAt,
  postImage,
  comments,
}) => {
  const dispach = useDispatch();

  const handleReaction = () => {
    const Post_id = {
      _id,
    };
    dispach(GetReactionData(Post_id));
  };

  const [like, setlike] = useState([]);

  const { posts } = useSelector((state) => state.album);

  useEffect(() => {
    const getLikes = async () => {
      const response = await axios.get(
        `http://localhost:5441/api/posts/GetLike/${_id}`,
      );
      setlike(response.data);
      console.log(response.data);
    };
    getLikes();
  }, [posts]);
  // console.log(like);

  return (
    <>
      <div className="bg-white shadow-xl  my-4 rounded-md xl:w-[75%] mx-auto lg:w-[80%] md:w-[90%] w-[95%] ">
        <div className="flex items-center p-2   justify-between ">
          <div className="flex items-center gap-1 ">
            <img
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
              alt=""
              className="rounded-full h-[60px] w-[60px] p-1"
            />
            <div className="flex flex-col ">
              <h2 className="text-md  font-semibold capitalize  text-gray-700">
                {user_id?.f_name} {user_id?.l_name}
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

          {/* <div className="flex gap-1 items-center">
            <BsThreeDots />a
            <IoCloseSharp size={25} className="text-gray-600" />
          </div> */}
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
        <div className="my-2 flex p-0 items-center w-full justify-between">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-sm font-semibold flex w-full items-center gap-1 text-gray-700">
              {(() => {
                let seen = new Set();
                return like?.map((item, index) => {
                  if (seen.has(item?.type)) return null;
                  seen.add(item?.type);

                  switch (item?.type) {
                    case "wow":
                      return (
                        <picture key={index}>
                          <source
                            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f62e/512.webp"
                            type="image/webp"
                          />
                          <img
                            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f62e/512.gif"
                            alt="😮"
                            width="20"
                            height="20"
                          />
                        </picture>
                      );
                    case "angry":
                      return (
                        <picture key={index}>
                          <source
                            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f620/512.webp"
                            type="image/webp"
                          />
                          <img
                            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f620/512.gif"
                            alt="😠"
                            width="20"
                            height="20"
                          />
                        </picture>
                      );
                    case "like":
                      return (
                        <picture key={index}>
                          <source
                            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d/512.webp"
                            type="image/webp"
                          />
                          <img
                            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d/512.gif"
                            alt="👍"
                            width="20"
                            height="20"
                          />
                        </picture>
                      );
                    case "love":
                      return (
                        <picture key={index}>
                          <source
                            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f/512.webp"
                            type="image/webp"
                          />
                          <img
                            src="https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f/512.gif"
                            alt="❤"
                            width="20"
                            height="20"
                          />
                        </picture>
                      );
                    case "haha":
                      return (
                        <picture key={index}>
                          <source
                            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f604/512.webp"
                            type="image/webp"
                          />
                          <img
                            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f604/512.gif"
                            alt="😄"
                            width="20"
                            height="20"
                          />
                        </picture>
                      );
                    case "sad":
                      return (
                        <picture key={index}>
                          <source
                            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f62d/512.webp"
                            type="image/webp"
                          />
                          <img
                            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f62d/512.gif"
                            alt="😭"
                            width="20"
                            height="20"
                          />
                        </picture>
                      );
                    case "crying": // Adding the crying (dorai) emoji
                      return (
                        <picture key={index}>
                          <source
                            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f622/512.webp"
                            type="image/webp"
                          />
                          <img
                            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f622/512.gif"
                            alt="😢"
                            width="20"
                            height="20"
                          />
                        </picture>
                      );
                    default:
                      return null;
                  }
                });
              })()}
              <div className="flex items-center justify-between">
                {like.length}
              </div>
            </h3>
            <span className="font-semibold flex me-2 ">
              {comments?.length}comments
            </span>
          </div>
        </div>
        <div className="py-1">
          <hr className="h-[1px] text-gray-400 " />
        </div>
        <div className="flex p-2 w-[90%] mx-auto   justify-between items-center">
          <div className="flex gap-2 items-center">
            {/* <SlLike size={20} /> */}
            <EmojiSection post_id={_id} like={like} />
            {/* <h4 className="font-semibold text-gray-600">Like</h4> */}
          </div>
          <div className="flex gap-2 items-center">
            <CommentModel
              caption={caption}
              background={background}
              post_id={_id}
              postImage={postImage}
              comments={comments}
              user_info={user_id}
            />
          </div>
          <div className="flex gap-2 items-center">
            <PiShareFatThin size={16} className="text-gray-500 font-semibold" />
            <h4 className="font-semibold text-gray-500">Shere</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetpostData;
