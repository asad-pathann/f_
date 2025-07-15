import React, { useState } from "react";

const emojis = [
  {
    name: "like",
    icon: "👍",
    bgColor: "bg-blue-100",
    color: "text-blue-400",
  },
  {
    name: "love",
    icon: "❤️",
    bgColor: "bg-red-100",
    color: "text-red-400",
  },
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

const EmojiSection = () => {
  const [showEmojis, setShowEmojis] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Main Like Button */}
      <button
        onMouseEnter={() => setShowEmojis(true)}
        onMouseLeave={() => setShowEmojis(false)}
        className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
      >
        👍 Like
      </button>

      {/* Emoji Reactions Popup */}
      <div
        onMouseEnter={() => setShowEmojis(true)}
        onMouseLeave={() => setShowEmojis(false)}
        className={`absolute -top-14 left-1/2 -translate-x-1/2 z-50 flex gap-2 px-4 py-2 bg-white rounded-full shadow-lg transition-all duration-200 ${
          showEmojis ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        {emojis.map((emoji) => (
          <div
            key={emoji.name}
            title={emoji.name}
            className={`text-2xl cursor-pointer transition-transform duration-200 transform hover:scale-125 ${emoji.bgColor} ${emoji.color} p-1 rounded-full`}
          >
            {emoji.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmojiSection;
