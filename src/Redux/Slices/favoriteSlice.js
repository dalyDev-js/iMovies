import { createSlice } from "@reduxjs/toolkit";

const INITIAL_FAVORITE = [
  {
    id: 519182,
    title: "Despicable Me 4",
    overview:
      "Gru and Lucy and their girls — Margo, Edith and Agnes — welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Meanwhile, Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.",
    poster_path: "/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
    vote_average: 7.21,
    vote_count: 481,
    release_date: "2024-06-20",
  },
];

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: INITIAL_FAVORITE,
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action) => {
      return state.filter((movie) => movie.id !== action.payload);
    },
    resetFavorite: () => {
      return [];
    },
  },
});

export const { addFavorite, removeFavorite, resetFavorite } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
