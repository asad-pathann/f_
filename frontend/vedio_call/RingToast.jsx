import React from "react";

const MiniToast = ({ message = "Success!", onClose }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-lg bg-gray-900 px-3 py-1.5 text-xs text-white shadow-md animate-bounce">
      <span className="h-2 w-2 rounded-full bg-green-500"></span>
      <span>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-1 text-gray-400 hover:text-white"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default MiniToast;
