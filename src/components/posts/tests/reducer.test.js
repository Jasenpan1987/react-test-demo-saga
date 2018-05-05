import { postsReducer } from "../reducer";
import { fetchPostsSuccess } from "../actions";
import { FETCH_POSTS_SUCCESS, status as Statuses } from "../constants";


const initState = {
  postList: [],
  status: Statuses.INIT
};

describe("test recuders", () => {
  it("should ignore random actions", () => {
    expect(postsReducer(initState, { type: "UNKNOWN" }))
      .toEqual(initState);
  });

  it("should return correct state when load posts success", () => {
    expect(postsReducer(initState, fetchPostsSuccess([
      { id: 0, title: "foo", body: "foo 0"},
      { id: 1, title: "bar", body: "bar 1"}
    ]))).toEqual({
      postList: [
        { id: 0, title: "foo", body: "foo 0"},
        { id: 1, title: "bar", body: "bar 1"}
      ],
      status: Statuses.SUCCESS
    });
  });
})