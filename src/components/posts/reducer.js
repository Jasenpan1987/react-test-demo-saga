import { 
  FETCH_POSTS_PENDING, FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED, status
} from "./constants";

const initState = {
  status: status.INIT,
  postList: []
};

export function postsReducer(state = initState, action) {
  switch(action.type) {
    case FETCH_POSTS_PENDING:
      return { ...state, status: status.PENDING };
    case FETCH_POSTS_SUCCESS:
      return { ...state, status: status.SUCCESS, postList: action.payload };
    case FETCH_POSTS_FAILED:
      return { ...state, status: status.FAILED };
    default:
      return state;
  }
}