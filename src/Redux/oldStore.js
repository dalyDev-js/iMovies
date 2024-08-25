import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combReducers } from "./CombineReducers";
import { thunk } from "redux-thunk";

const MyStore = createStore(
  combReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default MyStore;
