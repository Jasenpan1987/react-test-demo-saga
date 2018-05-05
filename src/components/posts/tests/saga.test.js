import { expectSaga } from "redux-saga-test-plan";
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { fetchPostsWorker } from "../saga";
import * as API from "../api";
import { fetchPostsPending, fetchPostsSuccess, fetchPostsFailed } from "../actions";

const fakePosts = [ { id: 0, title: "foo", body: "bar" } ];

describe("test action creators", () => {

  it("should yield a pending action", () => {
    return expectSaga(fetchPostsWorker)
      .put(fetchPostsPending())
      .run();
  })
  it("should yield a succecss action", () => {
    return expectSaga(fetchPostsWorker)
      .provide([
        [matchers.call.fn(API.getPosts), fakePosts],
      ]).put(fetchPostsSuccess(fakePosts)).run();
  });

  it("should yield a exception when error", () => {
    return expectSaga(fetchPostsWorker)
      .provide([
        [matchers.call.fn(API.getPosts), throwError({ errorCode: 404, errorBody: 'Not Found' })]
      ])
      .put(fetchPostsFailed({ errorCode: 404, errorBody: 'Not Found' })).run();
  });
})
