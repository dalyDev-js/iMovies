import { combineReducers } from "redux";
import { favoriteReducer } from "./Reducers/favoriteReducer";
import { setterReducer } from "./Reducers/type_category_Reducer";
import { themeReducer } from "./Reducers/themeReducer";
import moviesReducer from "./Reducers/moviesReducer";

export const combReducers = combineReducers({
  favReducer: favoriteReducer,
  setReducer: setterReducer,
  themeReducer: themeReducer,
  moviesReducer: moviesReducer,
});
