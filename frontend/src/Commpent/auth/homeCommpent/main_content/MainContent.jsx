import React, { useEffect } from "react";
import Addpost from "./Post/Addpost";
import ReelDiv from "./Reel/ReelDiv";
import GetpostData from "./Post/GetpostData";
import { useDispatch, useSelector } from "react-redux";
import { getPostAll, postReset } from "../../../../feature/User/post/postSLice";

const MainContent = () => {
  const dispacth = useDispatch();
  const { postSuccess, postError, postMessage, postLoading, posts } =
    useSelector((state) => state.album);
  useEffect(() => {
    dispacth(getPostAll());
    dispacth(postReset());
  }, []);
  return (
    <>
      <div className="h-[95vh] overflow-y-scroll   my-3">
        <Addpost />
        <div className=" my-4  xl:w-[75%] mx-auto lg:w-[80%] md:w-[90%] w-[95%] ">
        <ReelDiv />
        </div>
        {posts?.map((item, index) => {
          return <GetpostData key={index} {...item} />;
        })}
      </div>
    </>
  );
};

export default MainContent;
