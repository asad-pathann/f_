import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactData } from "../../../../../../feature/User/post/postSLice";
import { BsHandThumbsUp } from "react-icons/bs";

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

const EmojiSection = ({ post_id, like = [] }) => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);
  const userId = user?._id || user?.user?._id;

  const closeTimer = useRef(null);

  // ✅ like prop se sync karo
  useEffect(() => {
    if (!like || !userId) {
      setSelectedEmoji(null);
      return;
    }

    const myReaction = like.find(
      (item) => (item?.user_id === userId || item?.id === userId) && item?.type,
    );

    if (myReaction) {
      const found = emojis.find((e) => e.name === myReaction.type);
      setSelectedEmoji(found || null);
    } else {
      setSelectedEmoji(null);
    }
  }, [like, userId]);

  // ✅ Mouse enter — popup kholo, timer clear karo
  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setShowEmojis(true);
  };

  // ✅ Mouse leave — thoda delay de kar popup band karo
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setShowEmojis(false), 200);
  };

  // ✅ Emoji click — turant popup band + emoji set
  const handleEmojiClick = (emoji) => {
    // popup turant band
    setShowEmojis(false);
    if (closeTimer.current) clearTimeout(closeTimer.current);

    // toggle logic
    const isSame = selectedEmoji?.name === emoji.name;

    // Optimistic UI — turant button mein dikhao
    setSelectedEmoji(isSame ? null : emoji);

    const reactionData = {
      post_id,
      user_id: userId,
      emoji: isSame ? null : emoji.name,
    };

    console.log("Reaction:", reactionData);
    dispatch(ReactData(reactionData));
  };

  return (
    <div className="relative inline-block">
      {/* Main Like Button */}
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="px-4 py-2 rounded-full hover:bg-gray-200 transition-all duration-200 flex items-center gap-1"
      >
        <span className="text-xl transition-transform duration-200">
          {selectedEmoji ? (
            <span className="inline-block animate-pop">
              {selectedEmoji.icon}
            </span>
          ) : (
            <BsHandThumbsUp className="text-gray-600 text-lg" />
          )}
        </span>
        <span
          className={`font-semibold text-sm flex gap-1 transition-colors duration-200 ${
            selectedEmoji ? selectedEmoji.color : "text-gray-700"
          }`}
        >
          {selectedEmoji
            ? selectedEmoji.name.charAt(0).toUpperCase() +
              selectedEmoji.name.slice(1)
            : "Like"}
        </span>
      </button>

      {/* Emoji Popup — smooth fade + scale */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`absolute -top-14 left-1/2 -translate-x-1/2 z-50 flex gap-2 px-4 py-2 bg-white rounded-full shadow-lg
          transition-all duration-200 ease-out origin-bottom
          ${
            showEmojis
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-75 translate-y-2 pointer-events-none"
          }`}
      >
        {emojis.map((emoji, i) => (
          <button
            key={emoji.name}
            title={emoji.name}
            onClick={() => handleEmojiClick(emoji)}
            style={{ transitionDelay: showEmojis ? `${i * 25}ms` : "0ms" }}
            className={`text-2xl cursor-pointer transition-all duration-200 hover:scale-125 hover:-translate-y-1 ${emoji.bgColor} ${emoji.color} p-1 rounded-full`}
          >
            {emoji.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmojiSection;
