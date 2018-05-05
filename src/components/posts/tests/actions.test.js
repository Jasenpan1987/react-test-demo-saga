import { fetchPosts, fetchPostsSuccess } from "../actions";
import { FETCH_POSTS, FETCH_POSTS_SUCCESS } from "../constants";

describe("test action creators", () => {
  it("should return correct actions", () => {
    expect(fetchPosts()).toEqual({
      type: FETCH_POSTS
    });
    expect(fetchPostsSuccess([])).toEqual({ type: FETCH_POSTS_SUCCESS, payload: []})
  });
})