import React from "react";
import "./globals.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/homePage/Home";
import toast, { Toaster } from "react-hot-toast";
import Group from "./Pages/Group/Group";
import Video from "./Pages/Video/Video";
import Market from "./Pages/Market/Market";
import Friends from "./Pages/Friend/Friend";
import "react-loading-skeleton/dist/skeleton.css";
import Profile from "../Profile/Profile";

const App = () => {
  return (
    <>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/group" element={<Friends />} />
          <Route path="/video" element={<Video />} />
          <Route path="/market" element={<Market />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
