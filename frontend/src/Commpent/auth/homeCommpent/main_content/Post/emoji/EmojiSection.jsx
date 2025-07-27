import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactData } from "../../../../../../feature/User/post/postSLice";
import { FaRegThumbsUp } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";

const emojis = [
  { name: "like", icon: "👍", bgColor: "bg-blue-100", color: "text-blue-400" },
  { name: "love", icon: "❤️", bgColor: "bg-red-100", color: "text-red-400" },
  {
    name: "haha",
    icon: "😂",
    bgColor: "bg-yellow-100",
    color: "text-yellow-400",
  },
  {
    name: "wow",
    icon: "😮",
    bgColor: "bg-yellow-100",
    color: "text-yellow-400",
  },
  {
    name: "sad",
    icon: "😢",
    bgColor: "bg-yellow-100",
    color: "text-yellow-400",
  },
  {
    name: "angry",
    icon: "😡",
    bgColor: "bg-orange-100",
    color: "text-orange-400",
  },
];

const EmojiSection = ({ post_id, like }) => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const dispatch = useDispatch();
  const [select, setselect] = useState(null);
  const user = useSelector((state) => state.auth);
  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    setShowEmojis(false);

    const reactionData = {
      post_id,
      user_id: user?._id,
      emoji: emoji.name,
    };

    console.log(user?._id); // Correct log
    dispatch(ReactData(reactionData));
    setselect(emoji);
  };

  const ispresent = like.find((item) => {
    return item?.id == user?._id;
  });

  return (
    <div className="relative inline-block">
      {/* Main Like Button */}
      <button
        onMouseEnter={() => setShowEmojis(true)}
        onMouseLeave={() => setTimeout(() => setShowEmojis(false), 3000)} // Small delay to allow clicking
        className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition flex items-center gap-1"
      >
        <span className="text-xl">
          {selectedEmoji ? (
            selectedEmoji.icon
          ) : (
            <GoThumbsup className="text-gray-600 text-2xl" />
          )}
        </span>
        <span
          className={`font-semibold text-sm flex gap-1 ${
            selectedEmoji ? selectedEmoji.color : ""
          }`}
        >
          {selectedEmoji
            ? selectedEmoji.name.charAt(0).toUpperCase() +
              selectedEmoji.name.slice(1)
            : "Like"}
        </span>
      </button>

      {/* Emoji Reactions Popup */}
      {showEmojis && (
        <div
          onMouseEnter={() => setShowEmojis(true)}
          onMouseLeave={() => setShowEmojis(false)}
          className="absolute -top-14 left-1/2 -translate-x-1/2 z-50 flex gap-2 px-4 py-2 bg-white rounded-full shadow-lg transition-all duration-200"
        >
          {emojis.map((emoji) => (
            <button
              key={emoji.name}
              title={emoji.name}
              onClick={() => handleEmojiClick(emoji)}
              className={`text-2xl cursor-pointer transition-transform duration-200 hover:scale-125 ${emoji.bgColor} ${emoji.color} p-1 rounded-full`}
            >
              {emoji.icon}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmojiSection;
