import { FETCH_POSTS } from "./constants";
import { fetchPostsPending, fetchPostsFailed, fetchPostsSuccess } from "./actions";
import { call, put, takeLatest } from "redux-saga/effects";
import * as API from "./api";

export function* fetchPostsWorker(action) {
  yield put(fetchPostsPending());
  try {
    const postList = yield call(API.getPosts);
    yield put(fetchPostsSuccess(postList));
  } catch(error) {
    yield put(fetchPostsFailed({ errorCode: 404, errorBody: "Not Found" }));
  }
}

export const postsSaga = [
  takeLatest(FETCH_POSTS, fetchPostsWorker)
];
