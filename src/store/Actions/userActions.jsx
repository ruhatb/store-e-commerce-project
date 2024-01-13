import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI } from "."; // Login API'yi buraya ekleyin

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (credentials) => {
    const response = await loginAPI(credentials); // API'yi buraya ekleyin
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userInfo = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
