import * as React from "react";
import Modal from "@mui/material/Modal";
import {
  FaBeer,
  FaImage,
  FaMapMarkerAlt,
  FaSmile,
  FaUserCircle,
  FaUserFriends,
} from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import { GoArrowLeft } from "react-icons/go";
//

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
import { IoMdClose } from "react-icons/io";
import { HiPlus } from "react-icons/hi";
import axios from "axios";

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
    startColor: "#ffffff",
    endColor: "#ffffff",
    image: "",
  });

  const [caption, setcpation] = React.useState("");

  const [change, setchange] = React.useState(false);

  const [media, setmedia] = React.useState(false);

  const [show, setshow] = React.useState(false);
  const [showBg, setshowBg] = React.useState(false);
  const { startColor, endColor } = selectColor;
  const [mediaSelect, setmediaSelect] = React.useState(true);
  const [imagePriveiw, setimageprivew] = React.useState(false);
  const [image, setimage] = React.useState("");

  React.useEffect(() => {
    // caption.length > 0  setshow(false) : setshow(true)
    if (caption.length > 0) {
      setshow(false);
    } else if (mediaSelect) {
      setshow(false);
    } else {
      setshow(true);
    }
  }, [caption, mediaSelect]);

  const dispactch = useDispatch();
  console.log(selectColor);

  const { user } = useSelector((state) => state.auth);
  const { posts, postLoading, postError, postMessage, postSuccess } =
    useSelector((state) => state.album);

  const handleClick = () => {
    const postData = {
      caption,
      background: selectColor,
      user_id: user?._id,
    };
    // dispactch(addPostData(postData));
    // handleCloudinary();
    uploadImage();
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

  const handleImageChanage = (e) => {
    const file = e.target.files[0];
    const image_url = URL.createObjectURL(file);
    setimageprivew(image_url);
    setmediaSelect(true);
    setimage(file);
  };

  const uploadImage = async () => {
    let data = new FormData();
    // usrbae :
    // drunmyuiq?

    data.append("file", image);
    data.append("upload_preset", "asadullah");

    const reponse = await axios.post(
      "https://api.cloudinary.com/v1_1/drunmyuiq/image/upload",
      data
    );
    console.log(reponse.data.url);
  };

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
          className={`flex  items-center  justify-center h-screen `}
        >
          <div
            onClick={(e) => e.stopPropagation(handleCLose) && setshowBg(false)}
            className="bg-white relative rounded-xl shadow-xl w-[90%] md:w-[60%] xl:w-[35%]"
          >
            {/* cros  div X  */}
            <div className="overflow-y-scroll hide_scroll h-[450px]">
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
                className={`w-full text-xl  h-[150px] text-black ${
                  change
                    ? "h-[350px] text-white flex items-center justify-center"
                    : media
                    ? "h-[0px]"
                    : "h-[200px]"
                }  cap outline-0 relative p-2 resize-none transition-all duration-150`}
                id=""
              >
                <p
                  className={`absolute h-[full]  ${show ? "block" : "hidden"} ${
                    media ? "text-[15px]" : "text-2xl"
                  }`}
                >
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

              {/* image dev upload image */}
              {media && (
                <>
                  <input
                    onChange={handleImageChanage}
                    type="file"
                    name="image"
                    id="image"
                    className="hidden"
                  />
                  <label for="image">
                    <div
                      className={`relative transition-all duration-150 bg-gray-200 rounded-md mx-auto mb-3  w-full max-w-md h-60 flex items-center justify-center`}
                    >
                      {/* Close Button */}
                      <button
                        onClick={() => {
                          setmedia(false);
                          setimageprivew(false);
                          setmediaSelect(false);
                        }}
                        className="absolute top-3 right-3 bg-gray-400 hover:bg-gray-100 cursor-pointer   hover:text-black text-white rounded-full p-2"
                      >
                        <IoMdClose size={20} />
                      </button>

                      {/* Upload Content */}
                      <div className="flex flex-col items-center">
                        {mediaSelect ? (
                          <>
                            <div className="  ">
                              <img
                                src={imagePriveiw}
                                alt=""
                                className="w-full object-contain"
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            {" "}
                            <div className="bg-gray-300 rounded-full p-3 mb-2">
                              <HiPlus size={24} className="text-gray-700" />
                            </div>
                            <p className="text-sm font-medium text-gray-800">
                              Add photos/videos
                            </p>
                            <p className="text-xs text-gray-600">
                              or drag and drop
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </label>
                </>
              )}

              {/*  */}

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
              <div className="flex items-center justify-between  border rounded-md border-gray-300 mx-auto px-4 py-2 w-full max-w-md bg-white shadow-sm">
                <span className="text-sm text-gray-700 font-medium">
                  Add to your post
                </span>
                <div className="flex items-center gap-4 text-xl">
                  <FaImage
                    onClick={() => setmedia(!media)}
                    className="text-green-600 cursor-pointer"
                  />
                  <FaUserFriends className="text-blue-600 cursor-pointer" />
                  <FaSmile className="text-yellow-500 cursor-pointer" />
                  <FaMapMarkerAlt className="text-red-500 cursor-pointer" />
                  {/* <RiGifLine className="text-teal-500 cursor-pointer" /> */}
                  <BsThreeDots className="text-gray-600 cursor-pointer" />
                </div>
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
