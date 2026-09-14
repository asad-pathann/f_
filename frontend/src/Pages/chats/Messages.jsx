import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BiSolidSend } from "react-icons/bi";
import io from "socket.io-client";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaVideo } from "react-icons/fa6";

const socket = io.connect("http://localhost:5441");

const style = {
  position: "absolute",
  bottom: "10px",
  right: "20px",
  width: 360,
  height: 480,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  outline: "none",
  overflow: "hidden",
};

export default function Messages({ username, reciver_id, l_name }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const { user } = useSelector((state) => state.auth);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // =====================================================
  // SEND MESSAGE
  // =====================================================

  const handleMessage = () => {
    // Empty message ko send nahi karna
    if (!message.trim()) {
      return;
    }

    // New message
    const newMessage = {
      message: message.trim(),
      time: Date.now(),
      sender_id: user?._id,
      reciver_id: reciver_id,
    };

    console.log("SENDING MESSAGE:", newMessage);

    // Server ko message send
    socket.emit("sent_message", newMessage);

    // Sender ki screen par message show
    setMessages((prev) => [
      ...prev,
      {
        ...newMessage,
        sent: true,
      },
    ]);

    // Input clear
    setMessage("");
  };

  // =====================================================
  // RECEIVE MESSAGE
  // =====================================================

  useEffect(() => {
    const handleReceivedMessage = (data) => {
      console.log("RECEIVED MESSAGE:", data);

      // const senderId = String(data?.sender_id);
      // const receiverId = String(data?.reciver_id);

      // const currentUserId = String(user?._id);

      // const currentChatUserId = String(reciver_id);

      const isCurrentChat =
        (data?.sender_id === user?._id &&
          data?.reciver_id === data?.reciver_id) ||
        (data?.sender_id === data?.reciver_id &&
          data?.reciver_id === user?._id);

      // Agar kisi doosri chat ka message hai
      // to ignore kar do
      if (!isCurrentChat) {
        console.log("MESSAGE FROM OTHER CHAT - IGNORED");
        return;
      }

      // =================================================
      // DUPLICATE PREVENTION
      // =================================================
      //
      // Apna message handleMessage() mein already
      // messages state mein add kar chuke hain.
      //
      // Agar backend sender ko bhi received_message bhej raha
      // hai to apna message dobara add nahi karna.
      //

      if (senderId === currentUserId) {
        console.log("MY OWN MESSAGE - IGNORED");
        return;
      }

      // =================================================
      // RECEIVER MESSAGE ADD
      // =================================================

      setMessages((prev) => [
        ...prev,
        {
          message: data?.message,
          time: data?.time,
          sender_id: data?.sender_id,
          reciver_id: data?.reciver_id,
          sent: false,
        },
      ]);
    };

    // Socket listener
    socket.on("recevied_message", handleReceivedMessage);

    // Cleanup
    return () => {
      socket.off("recevied_message", handleReceivedMessage);
    };
  }, [user?._id, reciver_id]);

  // =====================================================
  // SORT MESSAGES BY TIME
  // =====================================================

  const allMessage = [...messages].sort((a, b) => {
    return a.time - b.time;
  });

  const handleCalling = () => {
    socket.emit("calling", {
      sender_id: user?._id,
      reciver_id,
      sender_f_name: `${user?.f_name} ${user?.l_name}`,
    });
  };

  return (
    <div>
      {/* =================================================
          MESSAGE BUTTON
      ================================================= */}

      <button
        onClick={handleOpen}
        className="transition relative rounded-md px-4 py-2 bg-gray-200 font-semibold whitespace-nowrap shadow-sm"
      >
        Message
      </button>

      {/* =================================================
          CHAT MODAL
      ================================================= */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* =================================================
              HEADER
          ================================================= */}

          <div className="flex items-center justify-between p-3 border-b bg-white">
            <div className="flex items-center gap-2">
              <Avatar sx={{ bgcolor: deepPurple[300] }}>
                {username?.charAt(0)}
              </Avatar>

              <div>
                <Typography
                  id="modal-modal-title"
                  variant="subtitle2"
                  className="font-bold"
                >
                  {username} {l_name}
                </Typography>

                <span className="text-[10px] text-gray-500 block -mt-1">
                  Active 44m ago
                </span>
              </div>
            </div>

            {/* Header buttons */}

            <div className="flex items-center gap-1">
              <Link
              
                onClick={handleCalling}
                target="_blank"
                to={`/vedio-call/${user._id}/${reciver_id}`}
              >
                <button className="text-purple-600 cursor-pointer hover:text-purple-800 font-bold text-lg px-2">
                  <FaVideo />
                </button>
              </Link>

              <button
                onClick={handleClose}
                className="text-purple-600 hover:text-purple-800 font-bold text-lg px-2"
              >
                ✕
              </button>
            </div>
          </div>

          {/* =================================================
              CHAT BODY
          ================================================= */}

          <div className="flex flex-col overflow-y-auto flex-1 p-2">
            {allMessage.length === 0 && (
              <div className="flex justify-center items-center h-full text-gray-400 text-sm">
                No messages yet
              </div>
            )}

            {allMessage.map((item, index) => (
              <div
                key={`${item.time}-${index}`}
                className={`flex flex-col mb-2 ${
                  item.sent ? "items-end" : "items-start"
                }`}
              >
                {/* Message */}

                <p
                  className={`mt-1 py-2 px-5 w-max max-w-[80%] rounded-full ${
                    item.sent
                      ? "bg-green-400 text-white"
                      : "bg-gray-300 text-black"
                  }`}
                >
                  {item.message}
                </p>

                {/* Time */}

                <small className="text-gray-500 text-[10px]">
                  {new Date(item.time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </small>
              </div>
            ))}
          </div>

          {/* =================================================
              MESSAGE INPUT
          ================================================= */}

          <div className="p-3 border-t bg-white flex items-center gap-2">
            <input
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
              type="text"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleMessage();
                }
              }}
              placeholder="Aa"
              className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm outline-none"
            />

            <button
              onClick={handleMessage}
              className="text-blue-600 cursor-pointer font-bold text-lg"
            >
              <BiSolidSend />
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
