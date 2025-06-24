import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addPost, getllpost } from "./postServes";
import GetpostData from "../../../Commpent/auth/homeCommpent/main_content/Post/GetpostData";

const initialState = {
  posts: [],
  postLoading: false,
  postError: false,
  postSuccess: false,
  postMessage: "",
};

export const addPostData = createAsyncThunk(
  "add-post",
  async (postData, thunkAPI) => {
    try {
      return await addPost(postData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const getPostAll = createAsyncThunk("get-data", async (_, thunkAPI) => {
  try {
    return getllpost();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.error);
  }
});
export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postReset: (state) => {
      (state.postLoading = false), (state.postError = false);
      state.postSuccess = false;
      state.postMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPostData.pending, (state, action) => {
        state.postLoading = true;
      })
      .addCase(addPostData.rejected, (state, action) => {
        state.postError = true;
        state.postMessage = action.payload;
        state.postLoading = false;
      })
      .addCase(addPostData.fulfilled, (state, action) => {
        state.postSuccess = true;
        state.postLoading = false;
        state.postMessage = action.payload;
        state.posts.push(action.payload);
      })
      .addCase(getPostAll.pending, (state, action) => {
        state.postLoading = true;
      })
      .addCase(getPostAll.rejected, (state, action) => {
        state.postLoading = false;
        state.postError = true;
        state.postMessage = action.payload;
      })
      .addCase(getPostAll.fulfilled, (state, action) => {
        state.postLoading = false;
        state.postError = false;
        state.postMessage = action.payload;
        state.posts = action.payload;
      });
  },
});

export const { postReset } = postSlice.actions;

export default postSlice.reducer;
