import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserLogin, Userserives } from "./UserSerives";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  userLoading: false,
  userError: false,
  userSuccess: false,
  userMessage: "",
};

export const reg_Slice = createAsyncThunk(
  "user",
  async (userData, thunkAPI) => {
    try {
      return await Userserives(userData);
    } catch (error) {
      return await thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const reg_login = createAsyncThunk(
  "login",
  async (userData, thunkAPI) => {
    try {
      return await UserLogin(userData);
    } catch (error) {
      return await thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userReset: (state) => {
      state.userLoading = false;
      state.userSuccess = false;
      state.userMessage = "";
      state.userError = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(reg_Slice.pending, (state, action) => {
        // state.userError = true;
        state.userLoading = true;
      })
      .addCase(reg_Slice.rejected, (state, action) => {
        state.userError = true;
        state.userMessage = action.payload;
        state.userLoading = false;
      })
      .addCase(reg_Slice.fulfilled, (state, action) => {
        state.userSuccess = true;
        state.userMessage = action.payload;
        state.user = action.payload;
        state.userError = false;
        state.userLoading = false;
      })
      .addCase(reg_login.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(reg_login.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
      })
      .addCase(reg_login.fulfilled, (state, action) => {
        state.userError = false;
        state.userMessage = action.payload;
        state.userSuccess = true;
        state.user = action.payload;
      });
  },
});

export default userSlice.reducer;
export const { userReset } = userSlice.actions;
