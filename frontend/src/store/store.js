import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../feature/User/UserSlice";
const store = configureStore({
  reducer: {
    auth: userSlice,
  },
});

export default store;
