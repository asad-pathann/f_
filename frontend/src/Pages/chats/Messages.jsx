import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BiSolidSend } from "react-icons/bi";
import io from "socket.io-client";
import { Avatar, Stack } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useState } from "react";
import { useEffect } from "react";

const socket = io.connect("http://localhost:5441");

// Is style se modal screen ke bilkul bottom-right corner mein fix ho jayega
const style = {
  position: "absolute",
  bottom: "10px", // Bottom se gap
  right: "20px", // Right se gap
  width: 360, // Chatbox ki width
  height: 480, // Chatbox ki height
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "12px", // rounded corners jaisa messenger me hota h
  display: "flex",
  flexDirection: "column",
  outline: "none",
  overflow: "hidden",
};

export default function Messages({ username, reciver_id }) {
  const [open, setOpen] = React.useState(false);
  const [control, setControl] = useState("");
  const [sentMessage, setSentMessage] = useState([]);
  const [receviedMessages, setreceviedMessages] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleMessage = () => {
    socket.emit("sent_message", control);
    setSentMessage([...sentMessage, control]);
  };

  useEffect(() => {
    socket.on("recevied_message", (data) => {
      setreceviedMessages([...receviedMessages, data]);
    });
  }, [socket]);

  const allMessage = [...sentMessage, ...receviedMessages];
  return (
    <div>
      {/* Button ko aapki css ke sath bilkul waisa hi rakha hai */}
      <button
        onClick={handleOpen}
        className="transition relative rounded-md px-4 py-2 bg-gray-200 font-semibold whitespace-nowrap shadow-sm"
      >
        Message
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // Backdrop click handler active rahega taaki bahar click karne se close ho jaye
      >
        <Box sx={style}>
          {/* Header Section (Top) */}
          <div className="flex items-center justify-between p-3 border-b bg-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold">
                <Avatar sx={{ bgcolor: deepPurple[300] }}>
                  {username?.charAt(0)}
                </Avatar>
              </div>

              <div>
                <Typography
                  id="modal-modal-title"
                  variant="subtitle2"
                  className="font-bold"
                >
                  {username}
                </Typography>
                <span className="text-[10px] text-gray-500 block -mt-1">
                  Active 44m ago
                </span>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-purple-600 hover:text-purple-800 font-bold text-lg px-2"
            >
              ✕
            </button>
          </div>

          {/* Main Body (Niche push karne ke liye flex-1 aur justify-end kiya hai) */}
          <div className="flex flex-col overflow-y-scroll flex-1">
            {allMessage?.map((item, index) => {
              return (
                <>
                  {item?.sentMessage ? (
                    <>
                      <p className="text-center ms-auto w-max bg-green-500  text-white p-2 my-3">
                        {item}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-center w-max me-auto px-5 py-2 rounded-full bg-gray-300 p-2 my-3">
                        {item}
                      </p>
                    </>
                  )}
                </>
              );
            })}
          </div>

          {/* Footer Input Section (Bottom) */}
          <div className="p-3 bottom-0 border-t bg-white flex items-center gap-2">
            <input
              onChange={(e) => setControl(e.target.value)}
              value={control}
              type="text"
              placeholder="Aa"
              className="w-full bottom-0 bg-gray-100 rounded-full py-2 px-4 text-sm outline-none"
            />
            <button
              onClick={handleMessage}
              className=" right-4 text-blue-600 cursor-pointer font-bold text-lg"
            >
              <BiSolidSend />
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
