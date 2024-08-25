const INITIAL_VALUE = [];

export default function moviesReducer(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case "GET_MOVIES":
      return action.payload;

    default:
      return state;
  }
}
