import { configureStore } from "@reduxjs/toolkit";

import languageSlice from "./Slices/languageSlice";
import favoriteSlice from "./Slices/favoriteSlice";
import typeCategorySlice from "./Slices/typeCategorySlice.js";
import themeSlice from "./Slices/themeSlice.js";
import moviesSlice from "./Slices/moviesSlice.js";

const store = configureStore({
  reducer: {
    language: languageSlice,
    favorite: favoriteSlice,
    typeCategory: typeCategorySlice,
    theme: themeSlice,
    movies: moviesSlice,
  },
});

export default store;
