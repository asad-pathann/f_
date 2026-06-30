import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BiSolidSend } from "react-icons/bi";
import io from "socket.io-client";
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

export default function Messages({ username }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* Button ko aapki css ke sath bilkul waisa hi rakha hai */}
      <button
        onClick={handleOpen}
        className="transition rounded-md px-4 py-2 bg-gray-200 font-semibold whitespace-nowrap shadow-sm"
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
                MK
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
          <div className="flex-1 p-4 overflow-y-auto bg-white flex flex-col justify-end items-center text-center"></div>

          {/* Footer Input Section (Bottom) */}
          <div className="p-3 border-t bg-white flex items-center gap-2">
            <input
              type="text"
              placeholder="Aa"
              className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm outline-none"
            />
            <button className="text-blue-600 font-bold text-lg">
              <BiSolidSend />
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
