import React, { useState } from "react";

const FeedsMainContent = () => {
  const [likesCount, setLikesCount] = useState(124);
  const [isLiked, setIsLiked] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <main className="flex-1 bg-gray-100 min-h-screen flex items-center justify-center">
      {/* Main Post Card Container */}
      <div className="w-full max-w-xl h-[600px] bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
        {/* Header: User Info & Close/Options */}

        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
              alt="User"
              className="w-10 h-10 rounded-full object-cover border border-gray-200"
            />
            <div>
              <h3 className="text-sm font-bold text-gray-900 leading-tight">
                Israr Ullah
              </h3>
              <p className="text-xs text-gray-500">
                5 minutes ago · <span>👥</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors font-bold">
              ...
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
              ✕
            </button>
          </div>
        </div>
        {/* Publisher Info inside Video Box */}
        <div className="bg-black px-4 py-3 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80"
              alt="Channel"
              className="w-9 h-9 rounded-full object-cover border border-white/20"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold">Khyber News tv</span>
                <span className="text-xs text-blue-400 font-medium cursor-pointer hover:underline">
                  • Follow
                </span>
              </div>
              <p className="text-[11px] text-gray-400">22 Apr · 🌐</p>
            </div>
          </div>

          {/* Sound Mute/Unmute Toggle Button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            {isMuted ? (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
            )}
          </button>
        </div>
        {/* Video Player Section */}
        <div className="relative bg-black flex items-center justify-center max-h-[450px] overflow-hidden">
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls
            autoPlay
            loop
            muted={isMuted}
            className="w-full h-[400px] object-contain"
          ></video>
        </div>
        {/* Footer Actions (Like, Comment, Share) */}
        <div className="p-3 bg-white border-t border-gray-100 flex items-center justify-around text-gray-600 font-medium text-sm">
          {/* Like Button */}
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 flex-1 justify-center py-2 rounded-xl hover:bg-gray-100 transition-colors ${
              isLiked ? "text-blue-600 font-semibold" : ""
            }`}
          >
            <svg
              className="w-5 h-5"
              fill={isLiked ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
            <span>
              {isLiked ? "Liked" : "Like"} ({likesCount})
            </span>
          </button>

          {/* Comment Button */}
          <button className="flex items-center gap-2 flex-1 justify-center py-2 rounded-xl hover:bg-gray-100 transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Comment</span>
          </button>

          {/* Share Button */}
          <button className="flex items-center gap-2 flex-1 justify-center py-2 rounded-xl hover:bg-gray-100 transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
              <polyline points="16 6 12 2 8 6"></polyline>
              <line x1="12" x2="12" y1="2" y2="15"></line>
            </svg>
            <span>Share</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default FeedsMainContent;
