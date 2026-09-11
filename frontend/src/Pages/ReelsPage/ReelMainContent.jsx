import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Send,
  Smile,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Music2,
  X,
  Globe,
  ThumbsUp,
  CheckCircle2,
} from "lucide-react";

const REELS_DATA = [
  {
    id: 1,
    username: "Huzaib Khan Khan",
    userAvatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    timeAgo: "18h",
    privacy: "Public",
    music: "Musharaf Bangash · Pashto Song Yu De Pukhtoon Yu D...",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    likesCount: "2.4K",
    commentsCount: "382",
    sharesCount: "128",
  },
  {
    id: 2,
    username: "Shahid Afridi Official",
    userAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    timeAgo: "2h",
    privacy: "Public",
    music: "Atif Aslam · Tajdar-e-Haram Acoustic Vibes",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    likesCount: "15.2K",
    commentsCount: "1.8K",
    sharesCount: "540",
  },
  {
    id: 3,
    username: "Pak Cricket Network",
    userAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    timeAgo: "5h",
    privacy: "Public",
    music: "Original Sound - Sports Highlights",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    likesCount: "8.9K",
    commentsCount: "420",
    sharesCount: "210",
  },
];

const REACTIONS = [
  { id: "like", emoji: "👍", label: "Like" },
  { id: "love", emoji: "❤️", label: "Love" },
  { id: "care", emoji: "🥰", label: "Care" },
  { id: "haha", emoji: "😆", label: "Haha" },
  { id: "wow", emoji: "😮", label: "Wow" },
  { id: "sad", emoji: "😢", label: "Sad" },
  { id: "angry", emoji: "😡", label: "Angry" },
];

const ReelMainContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [messageText, setMessageText] = useState("");
  const [floatingReactions, setFloatingReactions] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const videoRef = useRef(null);
  const currentReel = REELS_DATA[currentIndex];

  useEffect(() => {
    setProgress(0);
    setIsLiked(false);
    setIsSaved(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      if (isPlaying) {
        videoRef.current.play().catch(() => setIsPlaying(false));
      }
    }
  }, [currentIndex]);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration || 1;
      setProgress((current / duration) * 100);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(REELS_DATA.length - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < REELS_DATA.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const spawnFloatingEmoji = (emoji) => {
    const id = Date.now() + Math.random();
    const leftOffset = 20 + Math.random() * 60;
    setFloatingReactions((prev) => [...prev, { id, emoji, left: leftOffset }]);

    setTimeout(() => {
      setFloatingReactions((prev) => prev.filter((r) => r.id !== id));
    }, 2000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    showToast(`Message sent to ${currentReel.username}!`);
    spawnFloatingEmoji("💬");
    setMessageText("");
  };

  const triggerReaction = (reaction) => {
    if (reaction.id === "like" || reaction.id === "love") {
      setIsLiked(!isLiked);
    }
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        spawnFloatingEmoji(reaction.emoji);
      }, i * 120);
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2500);
  };

  return (
    <div className="bg-black h-full min-h-screen text-white flex items-center justify-center relative overflow-hidden font-sans select-none">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="absolute top-6 z-50 bg-blue-600/90 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full shadow-xl backdrop-blur-md flex items-center space-x-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Arrow - Left */}
      <button
        onClick={handlePrev}
        className="hidden md:flex absolute left-8 lg:left-16 z-40 w-12 h-12 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/60 items-center justify-center text-white shadow-2xl transition transform hover:scale-110 active:scale-95"
        title="Previous Reel"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Main Reel Container */}
      <div className="relative w-full max-w-[420px] h-screen sm:h-[92vh] max-h-[850px] bg-neutral-950 sm:rounded-2xl overflow-hidden shadow-2xl border border-neutral-800/80 flex flex-col justify-between">
        {}
        <div className="absolute top-0 left-0 right-0 z-30 p-3 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
          {/* Story Progress Bar */}
          <div className="flex space-x-1.5 mb-2.5">
            {REELS_DATA.map((reel, idx) => (
              <div
                key={reel.id}
                className="h-1 flex-1 bg-gray-600/60 rounded-full overflow-hidden"
              >
                <div
                  className="h-full bg-white transition-all duration-100 ease-linear"
                  style={{
                    width:
                      idx === currentIndex
                        ? `${progress}%`
                        : idx < currentIndex
                          ? "100%"
                          : "0%",
                  }}
                />
              </div>
            ))}
          </div>

          {/* User Profile Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <img
                src={currentReel.userAvatar}
                alt={currentReel.username}
                className="w-10 h-10 rounded-full border-2 border-blue-500 object-cover shadow"
              />
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5">
                  <span className="font-bold text-sm text-white drop-shadow">
                    {currentReel.username}
                  </span>
                  <span className="text-xs text-gray-300">
                    · {currentReel.timeAgo}
                  </span>
                  <Globe className="w-3 h-3 text-gray-300" />
                </div>
                {/* Audio Track Info */}
                <div className="flex items-center space-x-1 text-xs text-gray-300 opacity-90 truncate max-w-[190px]">
                  <Music2 className="w-3 h-3 text-white animate-pulse" />
                  <span className="truncate">{currentReel.music}</span>
                </div>
              </div>
            </div>

            {/* Top Right Controls */}
            <div className="flex items-center space-x-1 text-white">
              <button
                onClick={togglePlayPause}
                className="p-1.5 hover:bg-white/20 rounded-full transition"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5 fill-current" />
                )}
              </button>
              <button
                onClick={toggleMute}
                className="p-1.5 hover:bg-white/20 rounded-full transition"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
              <button className="p-1.5 hover:bg-white/20 rounded-full transition">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {}
        <div
          className="relative w-full h-full cursor-pointer flex items-center justify-center bg-black"
          onClick={togglePlayPause}
        >
          <video
            ref={videoRef}
            src={currentReel.videoUrl}
            className="w-full h-full object-cover"
            autoPlay
            loop
            playsInline
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleNext}
          />

          {/* Pause Center Overlay Icon */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] transition">
              <div className="w-16 h-16 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white shadow-2xl">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>
            </div>
          )}

          {/* Animated Floating Emoji Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
            {floatingReactions.map((item) => (
              <div
                key={item.id}
                className="absolute bottom-24 text-3xl animate-float-up opacity-90"
                style={{ left: `${item.left}%` }}
              >
                {item.emoji}
              </div>
            ))}
          </div>

          {}
          <div
            className="absolute right-3 bottom-24 z-30 flex flex-col items-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Reaction Icon / Heart Button */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => {
                  setIsLiked(!isLiked);
                  spawnFloatingEmoji(isLiked ? "💔" : "❤️");
                }}
                className={`w-11 h-11 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 transition transform active:scale-90 hover:scale-110 ${
                  isLiked ? "text-red-500 bg-red-500/20" : "text-white"
                }`}
              >
                <Heart className={`w-6 h-6 ${isLiked ? "fill-red-500" : ""}`} />
              </button>
              <span className="text-xs font-semibold mt-1 drop-shadow">
                {currentReel.likesCount}
              </span>
            </div>

            {/* Comment Button */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => showToast("Comments section opened")}
                className="w-11 h-11 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 text-white transition transform active:scale-90 hover:scale-110"
              >
                <MessageCircle className="w-6 h-6" />
              </button>
              <span className="text-xs font-semibold mt-1 drop-shadow">
                {currentReel.commentsCount}
              </span>
            </div>

            {/* Share Button */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => showToast("Share link copied to clipboard!")}
                className="w-11 h-11 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 text-white transition transform active:scale-90 hover:scale-110"
              >
                <Share2 className="w-6 h-6" />
              </button>
              <span className="text-xs font-semibold mt-1 drop-shadow">
                {currentReel.sharesCount}
              </span>
            </div>

            {/* Save / Bookmark Button */}
            <button
              onClick={() => {
                setIsSaved(!isSaved);
                showToast(
                  isSaved ? "Removed from Saved" : "Reel Saved to collection!",
                );
              }}
              className={`w-11 h-11 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 transition transform active:scale-90 hover:scale-110 ${
                isSaved ? "text-yellow-400 bg-yellow-400/20" : "text-white"
              }`}
            >
              <Bookmark
                className={`w-6 h-6 ${isSaved ? "fill-yellow-400" : ""}`}
              />
            </button>

            {/* Animated Audio Disc Icon */}
            <div className="w-10 h-10 rounded-full border-2 border-neutral-700 overflow-hidden animate-spin-slow bg-neutral-900 flex items-center justify-center shadow-lg">
              <img
                src={currentReel.userAvatar}
                alt="Audio disc"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {}
        <div className="absolute bottom-0 left-0 right-0 z-30 p-3 bg-gradient-to-t from-black/95 via-black/75 to-transparent flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            {/* Message Input Pill */}
            <form onSubmit={handleSendMessage} className="flex-1 relative">
              <input
                type="text"
                placeholder="Send message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="w-full h-11 bg-black/50 border border-neutral-600/80 rounded-full pl-4 pr-10 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 backdrop-blur-md transition"
              />
              <button
                type="button"
                onClick={() => spawnFloatingEmoji("😊")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
              >
                <Smile className="w-5 h-5" />
              </button>
            </form>

            {/* Reaction Emojis Row */}
            <div className="flex items-center space-x-1 bg-black/50 p-1 rounded-full border border-neutral-700/60 backdrop-blur-md">
              {REACTIONS.map((reaction) => (
                <button
                  key={reaction.id}
                  onClick={() => triggerReaction(reaction)}
                  className="text-lg hover:scale-125 active:scale-95 transition transform p-1 rounded-full hover:bg-white/10"
                  title={reaction.label}
                >
                  {reaction.emoji}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrow - Right */}
      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-8 lg:right-16 z-40 w-12 h-12 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/60 items-center justify-center text-white shadow-2xl transition transform hover:scale-110 active:scale-95"
        title="Next Reel"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Floating Animation Styles */}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(0.8);
            opacity: 1;
          }
          100% {
            transform: translateY(-240px) scale(1.4);
            opacity: 0;
          }
        }
        .animate-float-up {
          animation: floatUp 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spinSlow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ReelMainContent;
