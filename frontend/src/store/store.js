import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../feature/User/UserSlice";
import PostSlice from "../feature/User/post/postSLice";
const store = configureStore({
  reducer: {
    auth: userSlice,
    album: PostSlice,
  },
});

export default store;
