import { useState, useEffect, useCallback, useRef } from "react";

import io from "socket.io-client";

const socket = io.connect("http://localhost:5441");

const CallToast = ({ userName }) => {
  const [toast, setToast] = useState({ visible: false, callerName: "" });
  const timerRef = useRef(null);

  const showCallToast = useCallback((callerName = "Unknown") => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast({ visible: true, callerName });
    timerRef.current = setTimeout(() => {
      setToast({ visible: false, callerName: "" });
    }, 5000);
  }, []);

  const hideToast = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast({ visible: false, callerName: "" });
  }, []);

  // 🎯 CALL DETECT — apna real call source yahan lagao
  useEffect(() => {
    const interval = setInterval(() => {
      const names = ["Ali Khan", "Sara Ahmed", "John Doe", "Mom", "Office"];
      const randomName = names[Math.floor(Math.random() * names.length)];
      showCallToast(randomName);
    }, 10000);

    return () => {
      clearInterval(interval);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [showCallToast]);

  const handleIgnore = () => {};
  const handleAnswer = () => {};
  return (
    <div className="fixed flex flex-col bg-white dark:bg-gray-800 border-l-4 p-2  rounded-md  top-5 right-5 z-50 animate-slide-in">
      <div className="flex items-center gap-3  border-green-500 rounded-lg shadow-2xl px-5 py-4 min-w-[320px] max-w-md">
        {/* Phone Icon with pulse */}
        <div className="relative">
          <div className="w-12 h-12 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full">
            <svg
              className="w-6 h-6 text-green-600 dark:text-green-400 animate-ring"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.02l-2.2 2.2z" />
            </svg>
          </div>
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </div>
        {/* Content */}
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            Incoming Call...
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            📞 {userName}
          </p>
        </div>
        {/* Close Button */}
        <button
          onClick={hideToast}
          className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center w-full justify-center gap-1 px-3  ">
        <button
          onClick={handleIgnore}
          className="bg-red-500 rounded-md w-full capitalize font-semibold  p-1 "
        >
          ignore
        </button>
        <button
          onClick={handleAnswer}
          className="bg-green-500 rounded-md capitalize font-semibold w-full  p-1  "
        >
          answer
        </button>
      </div>
    </div>
  );
};

export default CallToast;
