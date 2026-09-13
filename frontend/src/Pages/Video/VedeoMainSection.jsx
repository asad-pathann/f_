import React, { useState, useRef } from "react";
import {
  ThumbsUp,
  MessageSquare,
  Share2,
  MoreHorizontal,
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";

const VedeoMainSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      if (total > 0) {
        setProgress((current / total) * 100);
      }
    }
  };

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    if (videoRef.current) {
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  return (
    <div className="max-w-xl mx-auto my-6 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden font-sans">
      {/* Header Section */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover border border-slate-200"
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-slate-900 text-sm leading-tight">
                Muhammad Sadiq
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              <span className="text-blue-600 font-medium">
                #1980vibes #1980stile
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-slate-400">
          <button className="p-1.5 hover:bg-slate-100 rounded-full transition">
            <MoreHorizontal size={18} />
          </button>
          <button className="p-1.5 hover:bg-slate-100 rounded-full transition">
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Video Container */}
      <div className="relative group bg-black   flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          className="w-full h-[450px] object-cover cursor-pointer"
          onClick={togglePlay}
          poster="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&auto=format&fit=crop&q=80"
          src="https://assets.mixkit.co/videos/preview/mixkit-car-driving-on-a-street-in-a-city-41554-large.mp4"
        />

        {/* Video Overlay Controls */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="flex items-center space-x-3 text-white">
            <button
              onClick={togglePlay}
              className="p-1.5 hover:bg-white/20 rounded-full transition"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>

            {/* Progress Bar */}
            <div
              onClick={handleProgressClick}
              className="flex-1 h-1.5 bg-white/30 rounded-full cursor-pointer overflow-hidden relative"
            >
              <div
                className="h-full bg-white rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            <button
              onClick={toggleMute}
              className="p-1.5 hover:bg-white/20 rounded-full transition"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
        </div>
      </div>
      {/* Footer / Reactions Section */}
      <div className="px-4 py-3 border-t border-slate-100 flex items-center justify-between text-slate-600 text-sm">
        <button className="flex items-center space-x-2 hover:bg-slate-50 px-3 py-1.5 rounded-lg transition font-medium">
          <ThumbsUp size={18} className="text-slate-500" />
          <span>4</span>
        </button>

        <button className="flex items-center space-x-2 hover:bg-slate-50 px-3 py-1.5 rounded-lg transition font-medium">
          <MessageSquare size={18} className="text-slate-500" />
          <span>Comment</span>
        </button>

        <button className="flex items-center space-x-2 hover:bg-slate-50 px-3 py-1.5 rounded-lg transition font-medium">
          <Share2 size={18} className="text-slate-500" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default VedeoMainSection;
