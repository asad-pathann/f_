import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addPost, getllpost, GetReact, makeReaction } from "./postServes";
import GetpostData from "../../../Commpent/auth/homeCommpent/main_content/Post/GetpostData";
import { makeReact } from "../../../../../Beckend/Controll/PostControl";

const initialState = {
  posts: [],
  postLoading: false,
  postError: false,
  postSuccess: false,
  postMessage: "",
  reactionError: false,
  reactSucess: false,
  reactMessage: "",
  reactLoading: false,
  react: [],
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
export const ReactData = createAsyncThunk(
  "likes",
  async (reactionData, thunkAPI) => {
    try {
      return await makeReaction(reactionData);
    } catch (error) {
      return await rejectWithValue(error.response.data.error);
    }
  }
);

export const GetReactionData = createAsyncThunk(
  "getLIke",
  async (post_id, thunkAPI) => {
    try {
      return await GetReact(post_id);
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postReset: (state) => {
      (state.postLoading = false), (state.postError = false);
      state.postSuccess = false;
      state.postMessage = "";
      state.reactLoading = false;
      state.reactMessage = "";
      state.reactSucess = false;
      state.reactionError = false;
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
        state.posts.unshift(action.payload);
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
        // state.postMessage = action.payload;
        state.posts = action.payload;
      })
      .addCase(ReactData.pending, (state, action) => {
        state.reactLoading = true;
      })
      .addCase(ReactData.rejected, (state, action) => {
        state.reactLoading = false;
        state.reactionError = true;
        state.reactMessage = action.payload;
      })
      .addCase(ReactData.fulfilled, (state, action) => {
        state.reactLoading = false;
        state.reactSucess = true;
        state.reactMessage = action.payload;
        state.react = action.payload;
      })
      .addCase(GetReactionData.pending, (state, acion) => {
        state.reactLoading = true;
      })
      .addCase(GetReactionData.rejected, (state, action) => {
        state.reactionError = true;
        state.postMessage = action.payload;
      })
      .addCase(GetReactionData.fulfilled, (state, action) => {
        state.reactLoading = false;
        state.postMessage = action.payload;
        state.reactSucess = true;
        state.react = action.payload;
      });
  },
});

export const { postReset } = postSlice.actions;

export default postSlice.reducer;
