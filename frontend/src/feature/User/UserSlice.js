import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetInfo, GetUuser, UserLogin, Userserives } from "./UserSerives";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  userLoading: false,
  userError: false,
  userSuccess: false,
  userMessage: "",
  allUsers: [],
  myinfo: null, // Pehle yahan [] tha, object data ke liye isse null rakhna behtar hai
};

// 1. Register Thunk
export const reg_Slice = createAsyncThunk(
  "user/register",
  async (userData, thunkAPI) => {
    try {
      return await Userserives(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error || "Registration failed",
      );
    }
  },
);

// 2. Login Thunk
export const reg_login = createAsyncThunk(
  "user/login",
  async (userData, thunkAPI) => {
    try {
      return await UserLogin(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error || "Login failed",
      );
    }
  },
);

// 3. Get All Users Thunk
export const GetalluserData = createAsyncThunk(
  "user/get-all-user",
  async (_, thunkAPI) => {
    try {
      return await GetUuser();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error || "All users lane mein masla hua",
      );
    }
  },
);

// 4. Get Single User Info Thunk (Jo Profile Page ke liye hai)
export const GetSingleUserData = createAsyncThunk(
  "user/get-info",
  async (userId, thunkAPI) => {
    try {
      // Yahan userId backend tak jayegi
      return await GetInfo(userId);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error || "Single user info lane mein masla hua",
      );
    }
  },
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
    },
    UserLogOut: (state) => {
      state.user = null;
      state.userLoading = false;
      state.userSuccess = false;
      state.userError = false;
      state.userMessage = "";
      state.myinfo = null; // Logout par profile data bhi saaf ho jaye
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      // === REGISTER CASES ===
      .addCase(reg_Slice.pending, (state) => {
        state.userLoading = true;
        state.userError = false;
      })
      .addCase(reg_Slice.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
      })
      .addCase(reg_Slice.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.userError = false;
        state.userMessage = "Registered Successfully";
        state.user = action.payload;
      })

      // === LOGIN CASES ===
      .addCase(reg_login.pending, (state) => {
        state.userLoading = true;
        state.userError = false;
      })
      .addCase(reg_login.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
      })
      .addCase(reg_login.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.userError = false;
        state.userMessage = "Logged In Successfully";
        state.user = action.payload;
      })

      // === GET ALL USERS CASES ===
      .addCase(GetalluserData.pending, (state) => {
        state.userLoading = true;
        state.userError = false;
      })
      .addCase(GetalluserData.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
      })
      .addCase(GetalluserData.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.userError = false;
        state.allUsers = action.payload;
      })

      // === GET SINGLE USER (INFO) CASES ===
      .addCase(GetSingleUserData.pending, (state) => {
        state.userLoading = true;
        state.userError = false;
      })
      .addCase(GetSingleUserData.rejected, (state, action) => {
        state.userLoading = false;
        state.userError = true;
        state.userMessage = action.payload;
      })
      .addCase(GetSingleUserData.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.userError = false;
        state.myinfo = action.payload; // Sahi state update ho rahi hai ab!
      });
  },
});

export default userSlice.reducer;
export const { userReset, UserLogOut } = userSlice.actions;
