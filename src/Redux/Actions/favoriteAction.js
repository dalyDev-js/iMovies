export const addFavorite = (movie) => {
  return {
    type: "ADD_FAVORITE",
    payload: movie,
  };
};

export const removeFavorite = (movieId) => {
  return {
    type: "REMOVE_FAVORITE",

    payload: movieId,
  };
};

export const resetFavorite = () => {
  return {
    type: "RESET_FAVORITE",
  };
};
