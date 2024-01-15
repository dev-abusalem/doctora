import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthentic: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      (state.isAuthentic = true), (state.user = action.payload);
    },
    logout: (state, action) => {
      (state.isAuthentic = false), (state.user = null);
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
