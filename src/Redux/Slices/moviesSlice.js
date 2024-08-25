import { createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../Network/AxiosInstance";

const INITIAL_VALUE = [];

const moviesSlice = createSlice({
  name: "movies",
  initialState: INITIAL_VALUE,
  reducers: {
    getMovies: (state, action) => {
      return action.payload;
    },
  },
});

export const { getMovies } = moviesSlice.actions;

export const fetchMovies =
  (page = 1, searchQuery = "", type, category = "popular", language) =>
  async (dispatch) => {
    let URL = `/${type}/${category}?&page=${page}&language=${language}`;

    if (searchQuery) {
      URL = `/${type}?query=${searchQuery}&&page=${page}`;
    } else {
      URL = `/${type}/${category}?&page=${page}&language=${language}`;
    }

    try {
      const response = await axiosInstance.get(URL);
      dispatch(getMovies(response.data.results));
    } catch (err) {
      console.error(err.message);
    }
  };

export default moviesSlice.reducer;
