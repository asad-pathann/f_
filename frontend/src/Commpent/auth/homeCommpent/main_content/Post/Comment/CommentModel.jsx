import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import {
  FaThumbsUp,
  FaRegComment,
  FaShare,
  FaRegGrinStars,
  FaCamera,
  FaSmile,
} from "react-icons/fa";
import { PiShare } from "react-icons/pi";
import { TiArrowRightThick } from "react-icons/ti";

import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
//
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { AddCommetSlice } from "../../../../../../feature/User/post/postSLice";
import { MdGifBox } from "react-icons/md";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 0, // remove extra padding for full design control
};

export default function CommentModal({
  post_id,
  background,
  caption,
  user_id,
  postImage,
  comments,
  user_info,
}) {
  const [open, setOpen] = React.useState(false);

  const [change, setchange] = React.useState(false);

  const [comment, setComment] = React.useState("");

  const { user } = useSelector((state) => state.auth);

  const handleShare = (e) => {
    [e.target.name] || e.target.value;
  };

  const { posts } = useSelector((state) => state.album);

  const dispach = useDispatch();

  const handleComment = () => {
    const postData = {
      comment,
      post_id,
      user_id: user?._id,
    };

    dispach(AddCommetSlice(postData));
    setComment("");
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        className="text-gray-500"
      >
        <div className="flex  items-center gap-2">
          <FaRegComment size={16} className="text-gray-500  border-none" />
          <h4 className="  text-gray-500">comment</h4>
        </div>
      </Button>
      <div className="relative">
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box
            sx={style}
            className={`overflow-y-scroll  ${
              background?.startColor !== "#ffffff" || background?.image
                ? "h-[600px]"
                : "h-[500px]"
            } hide_scroll`}
          >
            {/* Header */}

            <div className="flex  relative items-center px-4 py-2">
              <h2 className="absolute left-1/2 text-black transform -translate-x-1/2  text-md font-semibold">
                {user_info?.f_name} {user_info?.l_name}
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="  text-2xl ms-auto bg-gray-30  0 h-[30px] w-[30px] rounded-full flex items-center justify-center"
              >
                <IoMdClose />
              </button>
            </div>

            {/* Post Image */}
            <input
              onChange={(e) => setcpation(e.target.value)}
              value={caption}
              type="text"
              className={`${
                change
                  ? "w-full font-semibold  text-center h-full"
                  : "h-[40px] w-full"
              } mb-2 outline-0 resize-none `}
              name=""
              id=""
            />
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
                  : "h-10"
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

            {/* Reaction Count */}
            <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <span className="text-blue-500">👍</span>
                <span>385</span>
              </div>
              <div>
                <span>1 share</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-around border-t border-b text-gray-600">
              <button className="flex items-center gap-2 py-2 hover:bg-gray-100 flex-1 justify-center">
                <FaThumbsUp /> Like
              </button>
              <button className="flex items-center gap-2 py-2 hover:bg-gray-100 flex-1 justify-center">
                <FaRegComment /> Comment
              </button>
              <button className="flex items-center gap-2 py-2 hover:bg-gray-100 flex-1 justify-center">
                <FaShare /> Share
              </button>
            </div>

            {comments?.map((item, index) => {
              return (
                <div key={index}>
                  <div className="flex items-center gap-2 p-2 rounded-xl shadow-sm bg-white hover:shadow-md transition">
                    <Avatar
                      alt={item?.user?.f_name}
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 30, height: 30 }}
                    />

                    {/* User info */}
                    <div className="bg-gray-100 rounded-lg px-3 py-2">
                      <h3 className="font-semibold  text-gray-800 text-sm">
                        {user?.f_name}
                        {user?.l_name}
                      </h3>
                      <p className="text-gray-600 text-xs font-semibold text-md">
                        {item?.comment}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Comment Box */}
            <div className="flex sticky bottom-0  left-0 bg-gray-200 w-full items-center gap-2 px-4 py-3">
              {/* User Avatar */}
              <Avatar
                alt="User"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 35, height: 35 }}
              />

              {/* Input box with icons */}
              <div className="flex items-center w-full bg-gray-100 rounded-full px-3 py-2">
                {/* Input */}
                <input
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  type="text"
                  placeholder="Write a comment..."
                  className="flex-1 bg-transparent text-sm px-2 focus:outline-none"
                />

                {/* Left icons inside input */}
                <div className="flex items-center gap-2 text-gray-500 mr-3">
                  <FaSmile
                    size={18}
                    className="cursor-pointer hover:text-gray-700"
                  />
                  <FaCamera
                    size={18}
                    className="cursor-pointer hover:text-gray-700"
                  />
                  <MdGifBox
                    size={20}
                    className="cursor-pointer hover:text-gray-700"
                  />
                  <FaRegGrinStars
                    size={18}
                    className="cursor-pointer hover:text-gray-700"
                  />
                </div>

                {/* Send button */}
                <div
                  onClick={handleComment}
                  className="bg-blue-500 text-white h-[32px] w-[32px] rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600"
                >
                  <TiArrowRightThick size={18} />
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}
