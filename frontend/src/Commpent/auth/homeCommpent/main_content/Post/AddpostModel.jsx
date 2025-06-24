import * as React from "react";
import Modal from "@mui/material/Modal";
import { FaBeer, FaUserCircle, FaUserFriends } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsEmojiSmile } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import { GoArrowLeft } from "react-icons/go";

import { colors } from "@mui/material";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Colors_data } from "./data/color_data";
import { colors_image } from "./data/GridColor";
import BackgroundThem from "./BackgroundThem";
import HashLoader from "react-spinners/esm/HashLoader";
import {
  addPostData,
  postReset,
} from "./../../../../../feature/User/post/postSLice";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openColor, setopenColor] = React.useState(false);
  const onClose = () => {
    handleClose(true);
  };

  const handleCLose = () => {
    setOpen(false);
  };
  // state mangement
  const [selectColor, setselectColor] = React.useState({
    startColor: "#fff",
    endColor: "#fff",
    image: "",
  });

  const [caption, setcpation] = React.useState("");

  const [change, setchange] = React.useState(false);

  const [show, setshow] = React.useState(false);
  const [showBg, setshowBg] = React.useState(false);
  const { startColor, endColor } = selectColor;

  React.useEffect(() => {
    // caption.length > 0  setshow(false) : setshow(true)
    if (caption.length > 0) {
      setshow(false);
    } else {
      setshow(true);
    }
  });

  const dispactch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { posts, postLoading, postError, postMessage, postSuccess } =
    useSelector((state) => state.album);

  const handleClick = () => {
    const postData = {
      caption,
      background: selectColor,
      user_id: user?._id,
    };
    dispactch(addPostData(postData));
  };
  useEffect(() => {
    if (postError) {
      toast.error(postMessage);
    }
    if (postSuccess) {
      toast.success("Posts Successfuly ! ");
      setcpation("");
      // setselectColor("");
      setchange(false);
      handleCLose();
      setselectColor("");
    }
    dispactch(postReset());
  }, [postSuccess, postError]);
  return (
    <div>
      <div
        onClick={handleOpen}
        className="bg-gray-200 p-[7px] flex items-center rounded-full w-full cursor-pointer"
      >
        <h3 className="font-semibold w-full pointer-events-none  capitalize text-gray-500">
          What's your name {user?.f_name}?
        </h3>
      </div>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ backdropFilter: "blur(2px)" }}
        onClose={handleClose}
      >
        {/* Backdrop ke andar content center karna */}
        <div
          onClick={() => {
            if (handleCLose) {
              handleCLose();
            }
            setselectColor("");
            // setshow(false);
            setchange(false);
          }}
          className={`flex  items-center justify-center h-screen `}
        >
          <div
            onClick={(e) => e.stopPropagation(handleCLose) && setshowBg(false)}
            className="bg-white relative rounded-xl shadow-xl w-[90%] md:w-[60%] xl:w-[35%]"
          >
            {/* cros  div X  */}
            <div
              onClick={handleClose || setshowBg(false)}
              className="flex justify-center items-center p-3  h-[30px] w-[30px] bg-gray-200 rounded-full absolute top-[20px] right-[10px]"
            >
              <h3 className="font-semibold text-1xl">X</h3>
            </div>
            <h3 className="text-center p-3  text-[20px] font-bold mb-2 ">
              Create Post
            </h3>
            <hr className="mb-4 bg-gray-300 border-0 h-[1px]" />
            {/* user div  */}
            <div className="flex items-center gap-1 p-3 ">
              <FaUserCircle className="text-gray-400 text-4xl" />
              <div className="flex flex-col">
                <h3 className="font-semibold capitalize text-md">
                  {user?.f_name} {user?.l_name}
                </h3>
                <div className="flex items-center gap-1 bg-gray-300 rounded-md">
                  <FaUserFriends className="text-sm" />
                  <p className="text-sm">friend</p>
                  <TiArrowSortedDown className="text-sm" />
                </div>
              </div>
            </div>

            {/* text area  */}
            <div
              name=""
              style={{
                background:
                  startColor === ""
                    ? `url(${selectColor?.image})`
                    : `linear-gradient(${startColor},${endColor})`,
                backgroundPosition: "center center",
                backgroundSize: "100% 100%",
              }}
              placeholder={`Whats youe ${user?.f_name} `}
              className={`w-full text-xl my-3 h-[150px] text-black ${
                change &&
                "h-[350px] text-white flex items-center justify-center"
              }  cap outline-0 relative p-2 resize-none transition-all duration-150`}
              id=""
            >
              <p className={`absolute h-[full]  ${show ? "block" : "hidden"}`}>
                what your mind ? user Name
              </p>
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
            </div>

            <div className="flex justify-between p-3  items-center">
              {openColor ? (
                <>
                  <div
                    onClick={() => setopenColor(false)} // ← Correct toggle
                    className="h-[30px] w-[30px] rounded-md bg-gray-400 flex items-center justify-center p-1 cursor-pointer"
                  >
                    <RiArrowLeftSLine size={25} />
                  </div>
                  {Colors_data?.map((item, index) => {
                    console.log(item);
                    return (
                      <motion.div
                        key={index} // Added key prop
                        onClick={() => {
                          index === 9
                            ? setshowBg(true)`block`
                            : setselectColor(
                                index === 8
                                  ? {
                                      startColor: "",
                                      endColor: "",
                                      image: item?.image,
                                    }
                                  : {
                                      startColor: item?.startColor,
                                      endColor: item?.endColor,
                                      image: "", // reset image if it's not the image option
                                    }
                              );

                          setchange(index == 0 ? false : true);
                        }}
                        initial={{ scale: 0, x: index * 10 }}
                        animate={{ scale: 1, x: "0" }}
                        transition={{ duration: 0.4 }}
                        className={`h-[30px] w-[30px] shadow-gray-300 shadow rounded-md  `}
                        style={{
                          background:
                            index == 8 || index === 9
                              ? `url(${item?.image})`
                              : `linear-gradient(to right,${item?.startColor}, ${item?.endColor})`,
                          backgroundPosition: "center center",
                          backgroundSize: "100% 100%",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></motion.div>
                    );
                  })}
                </>
              ) : (
                <div
                  onClick={() => setopenColor(true)} // ← Correct toggle
                  className="cursor-pointer"
                >
                  <img
                    src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
                    className="h-[30px] w-[30px] "
                    alt="Color"
                  />
                </div>
              )}

              <BsEmojiSmile size={"25px"} />
            </div>
            <div className="p-2 ">
              <button
                onClick={handleClick}
                disabled={show}
                style={{
                  background: show ? "gray" : "",
                }}
                className="p-2 rounded-md w-full cursor-pointer my-3 text-white font-bold bg-[#0866FF] "
              >
                {postLoading ? (
                  <HashLoader size={"25px"} color="white" />
                ) : (
                  "Post"
                )}
              </button>
            </div>

            {/* Modal content yahan likho */}
          </div>

          <BackgroundThem
            showBg={showBg}
            selectColor={selectColor}
            setselectColor={setselectColor}
            setshowBg={setshowBg}
            change={change}
          />
        </div>
      </Modal>
    </div>
  );
}
