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

export const favoriteReducer = (state = INITIAL_FAVORITE, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.payload];
    case "REMOVE_FAVORITE":
      return state.filter((movie) => movie.id !== action.payload);
    case "RESET_FAVORITE":
      return [];
    default:
      return state;
  }
};
