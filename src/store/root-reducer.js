import { combineReducers } from "redux";
import { postsReducer } from "../components/posts";

export const rootReducer = combineReducers({
  posts: postsReducer
});
