import * as React from "react";
import Modal from "@mui/material/Modal";
import { FaUserCircle, FaUserFriends } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsEmojiSmile } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";

import { colors } from "@mui/material";
import { Colors_data } from "../../date/color_data";
import { motion } from "framer-motion";

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

  return (
    <div>
      <div
        onClick={handleOpen}
        className="bg-gray-200 p-[7px] flex items-center rounded-full w-full cursor-pointer"
      >
        <h3 className="font-semibold w-full capitalize text-gray-500">
          What's your name min?
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
          onClick={handleCLose}
          className={`flex items-center justify-center h-screen `}
        >
          <div
            onClick={(e) => e.stopPropagation(handleCLose)}
            className="bg-white p-6 rounded-xl shadow-xl w-[90%] md:w-[60%] xl:w-[35%]"
          >
            <h3 className="text-center text-2xl font-semibold mb-4">
              Create Post
            </h3>
            <hr className="mb-4 bg-gray-300 border-0 h-[1px]" />
            {/* user div  */}
            <div className="flex items-center gap-1">
              <FaUserCircle className="text-gray-400 text-4xl" />
              <div className="flex flex-col">
                <h3 className="font-semibold text-md">username</h3>
                <div className="flex items-center gap-1 bg-gray-300 rounded-md">
                  <FaUserFriends className="text-sm" />
                  <p className="text-sm">friend</p>
                  <TiArrowSortedDown className="text-sm" />
                </div>
              </div>
            </div>

            {/* text area  */}
            <textarea
              name=""
              rows={5}
              placeholder="Whats youe mind "
              className="w-full text-2xl my-3 outline-0 resize-none"
              id=""
            ></textarea>

            <div className="flex justify-between items-center">
              {openColor ? (
                <>
                  <div
                    onClick={() => setopenColor(false)} // ← Correct toggle
                    className="h-[30px] w-[30px] rounded-md bg-gray-500 flex items-center justify-center p-1 cursor-pointer"
                  >
                    <RiArrowLeftSLine size={25} />
                  </div>
                  {Colors_data?.map((item, indx) => {
                    return (
                      <motion.div
                        initial={{ scale: 0, y: indx * 10 }}
                        animate={{ scale: 1, y: "0" }}
                        transition={{ duration: 0.4 }}
                        className={`h-[30px] w-[30px] rounded-md  `}
                        style={{
                          background: `linear-gradient(to right,${item?.startColor}, ${item?.endColor})`,
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

            {/* Modal content yahan likho */}
          </div>
        </div>
      </Modal>
    </div>
  );
}
