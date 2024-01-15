import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    text: "",
  },
  reducers: {
    updateSearch: (state, action) => {
      state.text = action.payload;
    },
  },
});
export const { updateSearch } = searchSlice.actions;
export default searchSlice.reducer;
