import {
  FETCH_POSTS_FAILED, FETCH_POSTS_PENDING, FETCH_POSTS_SUCCESS, FETCH_POSTS
} from "./constants";

export function fetchPosts() {
  return { type: FETCH_POSTS };
}

export function fetchPostsPending() {
  return { type: FETCH_POSTS_PENDING };
}

export function fetchPostsSuccess(payload) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload
  };
}

export function fetchPostsFailed(error) {
  return {
    type: FETCH_POSTS_FAILED,
    error
  };
}
