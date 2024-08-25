const INITIAL_STATE = true;

export const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return !state;
    default:
      return state;
  }
};
