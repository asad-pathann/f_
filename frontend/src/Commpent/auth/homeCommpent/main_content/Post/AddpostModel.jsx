import * as React from "react";
import Modal from "@mui/material/Modal";
import {
  FaImage,
  FaMapMarkerAlt,
  FaSmile,
  FaUserCircle,
  FaUserFriends,
} from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { HiPlus } from "react-icons/hi";
import { motion } from "framer-motion";
import { useSelector } from "react-redux"; // Redux se sirf user chahiye
import { Colors_data } from "./data/color_data";
import BackgroundThem from "./BackgroundThem";
import HashLoader from "react-spinners/HashLoader";
import toast from "react-hot-toast";
import axios from "axios";

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  // Bina Redux ke post loading track karne ke liye local state
  const [postLoading, setPostLoading] = React.useState(false);

  // State reset helper function
  const resetAllStates = () => {
    setOpen(false);
    setopenColor(false);
    setcpation("");
    setchange(false);
    setmedia(false);
    setshow(false);
    setshowBg(false);
    setmediaSelect(false);
    setimageprivew(false);
    setimage("");
    setimageLink("");
    setselectColor({ startColor: "#ffffff", endColor: "#ffffff", image: "" });
  };

  const handleClose = () => {
    resetAllStates();
  };

  const [openColor, setopenColor] = React.useState(false);
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
  const [mediaSelect, setmediaSelect] = React.useState(false);
  const [imagePriveiw, setimageprivew] = React.useState(false);
  const [image, setimage] = React.useState("");
  const [imageLoading, setimageloading] = React.useState(false);
  const [imageLink, setimageLink] = React.useState("");

  React.useEffect(() => {
    if (caption.length > 0 || image) {
      setshow(false);
    } else {
      setshow(true);
    }
  }, [caption, image]);

  // Redux se sirf current logged-in user uthayenge
  const { user } = useSelector((state) => state.auth);

  // CLICK HANDLE FUNCTION (NO REDUX)
  const handleClick = async () => {
    setPostLoading(true); // Loading start

    let uploadedImageUrl = "";

    // 1. Pehle image upload karein agar select hui hai
    if (image) {
      uploadedImageUrl = await uploadImage();
      if (!uploadedImageUrl) {
        toast.error("Image upload failed, cannot post.");
        setPostLoading(false);
        return;
      }
    }

    // 2. Data object taiyar karein (FIXED: removed redundant 'await')
    const postData = {
      caption,
      background: selectColor,
      user_id: user?._id,
      image: uploadedImageUrl,
    };

    // 3. Direct Axios Request bhejein
    try {
      let response = await axios.post(
        `http://localhost:5441/api/posts/add-post/${postData?.user_id}`,
        postData,
      );

      // 4. Success handling
      if (response.data) {
        toast.success("Post Successfully Created!");
        resetAllStates(); // Saari fields aur modal ko clear/close karne ke liye
      }
    } catch (error) {
      console.error("Post Creation Error:", error);
      toast.error(
        error?.response?.data?.message || "Something went wrong while posting!",
      );
    } finally {
      setPostLoading(false); // Loading end
    }
  };

  const handleImageChanage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const image_url = URL.createObjectURL(file);
      setimageprivew(image_url);
      setmediaSelect(true);
      setimage(file);
    }
  };

  const uploadImage = async () => {
    try {
      setimageloading(true);
      let data = new FormData();

      data.append("file", image);
      data.append("upload_preset", "posproject");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/drunmyuiq/image/upload",
        data,
      );

      return response.data.secure_url;
      setimageLink(reponse.data.url);
      setimageloading(false);
    } catch (error) {
      console.log("Cloudinary Error:", error);
      toast.error("Cloudinary Upload Error");
      setimageloading(false);
      return "";
    }
  };

  return (
    <div>
      <div
        onClick={handleOpen}
        className="bg-gray-200 p-[7px] flex items-center rounded-full w-full cursor-pointer"
      >
        <h3 className="font-semibold w-full pointer-events-none capitalize text-gray-500">
          What's on your mind, {user?.f_name}?
        </h3>
      </div>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ backdropFilter: "blur(2px)" }}
        onClose={handleClose}
      >
        <div
          onClick={handleClose}
          className="flex items-center justify-center h-screen"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white relative rounded-xl shadow-xl w-[90%] md:w-[60%] xl:w-[35%]"
          >
            <div
              className={`overflow-y-auto hide_scroll transition-all duration-150 ${change ? "h-[600px]" : "h-[500px]"}`}
            >
              {/* Close X Button */}
              <div
                onClick={handleClose}
                className="flex justify-center items-center p-3 cursor-pointer h-[30px] w-[30px] bg-gray-200 rounded-full absolute top-[20px] right-[10px] z-10"
              >
                <h3 className="font-semibold text-1xl">X</h3>
              </div>

              <h3 className="text-center p-3 text-[20px] font-bold mb-2">
                Create Post
              </h3>
              <hr className="mb-4 bg-gray-300 border-0 h-[1px]" />

              {/* User info */}
              <div className="flex items-center gap-1 p-3">
                <FaUserCircle className="text-gray-400 text-4xl" />
                <div className="flex flex-col">
                  <h3 className="font-semibold capitalize text-md">
                    {user?.f_name} {user?.l_name}
                  </h3>
                  <div className="flex items-center gap-1 bg-gray-300 rounded-md px-1">
                    <FaUserFriends className="text-sm" />
                    <p className="text-sm">friend</p>
                    <TiArrowSortedDown className="text-sm" />
                  </div>
                </div>
              </div>

              {/* Text Area Input */}
              <div
                style={{
                  background:
                    startColor === ""
                      ? `url(${selectColor?.image})`
                      : `linear-gradient(${startColor},${endColor})`,
                  backgroundPosition: "center center",
                  backgroundSize: "100% 100%",
                }}
                className={`w-full text-xl text-black ${change ? "h-[150px] text-white flex items-center justify-center" : media ? "h-[60px]" : "h-[120px]"} outline-0 relative p-2 transition-all duration-150`}
              >
                <input
                  onChange={(e) => setcpation(e.target.value)}
                  value={caption}
                  placeholder={`What's on your mind, ${user?.f_name}?`}
                  type="text"
                  className={`${change ? "w-full font-semibold text-center h-full bg-transparent text-white" : "h-[40px] w-full bg-transparent"} mb-2 outline-0`}
                />
              </div>

              {/* Media Preview Section */}
              {media && (
                <div className="p-3">
                  <input
                    onChange={handleImageChanage}
                    type="file"
                    name="image"
                    id="image-upload"
                    className="hidden"
                    accept="image/*"
                  />
                  <div className="relative bg-gray-100 border border-dashed border-gray-400 rounded-md mx-auto w-full max-w-md h-48 flex items-center justify-center overflow-hidden">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setmedia(false);
                        setimageprivew(false);
                        setimage("");
                        setmediaSelect(false);
                      }}
                      className="absolute top-3 right-3 bg-gray-500 hover:bg-gray-700 z-20 cursor-pointer text-white rounded-full p-1"
                    >
                      <IoMdClose size={18} />
                    </button>

                    {mediaSelect ? (
                      <img
                        src={imagePriveiw}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <label
                        htmlFor="image-upload"
                        className="flex flex-col items-center cursor-pointer w-full h-full justify-center"
                      >
                        <div className="bg-gray-300 rounded-full p-3 mb-2">
                          <HiPlus size={24} className="text-gray-700" />
                        </div>
                        <p className="text-sm font-medium text-gray-800">
                          Add photos/videos
                        </p>
                      </label>
                    )}
                  </div>
                </div>
              )}

              {/* Color Picker & Emojis */}
              <div className="flex justify-between p-3 items-center">
                {openColor ? (
                  <div className="flex items-center gap-1 overflow-x-auto w-full">
                    <div
                      onClick={() => setopenColor(false)}
                      className="h-[30px] w-[30px] min-w-[30px] rounded-md bg-gray-400 flex items-center justify-center p-1 cursor-pointer"
                    >
                      <RiArrowLeftSLine size={25} />
                    </div>
                    {Colors_data?.map((item, index) => (
                      <motion.div
                        key={index}
                        onClick={() => {
                          if (index === 9) {
                            setshowBg(true);
                          } else {
                            setselectColor(
                              index === 8
                                ? {
                                    startColor: "",
                                    endColor: "",
                                    image: item?.image,
                                  }
                                : {
                                    startColor: item?.startColor,
                                    endColor: item?.endColor,
                                    image: "",
                                  },
                            );
                          }
                          setchange(index === 0 ? false : true);
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="h-[30px] w-[30px] min-w-[30px] shadow rounded-md cursor-pointer"
                        style={{
                          background:
                            index === 8 || index === 9
                              ? `url(${item?.image})`
                              : `linear-gradient(to right, ${item?.startColor}, ${item?.endColor})`,
                          backgroundPosition: "center center",
                          backgroundSize: "100% 100%",
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <div
                    onClick={() => setopenColor(true)}
                    className="cursor-pointer"
                  >
                    <img
                      src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
                      className="h-[30px] w-[30px]"
                      alt="Color"
                    />
                  </div>
                )}
                <BsEmojiSmile size={"25px"} className="cursor-pointer" />
              </div>

              {/* Add to your post widget */}
              <div className="flex items-center justify-between border rounded-md border-gray-300 mx-auto px-4 py-2 w-[92%] bg-white shadow-sm">
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
                  <BsThreeDots className="text-gray-600 cursor-pointer" />
                </div>
              </div>

              {/* Submit Button */}
              <div className="p-3">
                <button
                  onClick={handleClick}
                  disabled={show || imageLoading || postLoading}
                  className="p-2 rounded-md w-full flex items-center justify-center cursor-pointer my-3 text-white font-bold bg-[#0866FF] disabled:bg-gray-400"
                >
                  {postLoading || imageLoading ? (
                    <HashLoader size={"25px"} color="white" />
                  ) : (
                    "Post"
                  )}
                </button>
              </div>
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
