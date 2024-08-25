const INITIAL_STATE = {
  type: "movie",
  category: "popular",
};

export const setterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_TYPE":
      return { ...state, type: action.payload };

    case "SET_CATEGORY":
      return { ...state, category: action.payload };

    default:
      return state;
  }
};
