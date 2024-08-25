import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = true;

const themeSlice = createSlice({
  name: "theme",
  initialState: INITIAL_STATE,
  reducers: {
    changeTheme: (state) => {
      return !state;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
