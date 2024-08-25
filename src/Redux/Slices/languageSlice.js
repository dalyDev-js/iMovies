import { createSlice } from "@reduxjs/toolkit";
import EN from "../../Lang/EN";
import AR from "../../Lang/AR";

const translation = {
  en: EN,
  ar: AR,
};

const INITIAL_STATE = {
  myLang: "en",
  translation: translation["en"],
};

const languageSlice = createSlice({
  name: "language",
  initialState: INITIAL_STATE,
  reducers: {
    setLanguage: (state, action) => {
      state.myLang = action.payload;
      state.translation = translation[action.payload];
    },
  },
});

export default languageSlice.reducer;
export const { setLanguage } = languageSlice.actions;
