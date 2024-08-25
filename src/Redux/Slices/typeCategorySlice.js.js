import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  type: "movie",
  category: "popular",
};

const typeCategorySlice = createSlice({
  name: "typeCategory",
  initialState: INITIAL_STATE,
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setType, setCategory } = typeCategorySlice.actions;
export default typeCategorySlice.reducer;
