import { all } from "redux-saga/effects"
import { postsSaga } from "../components/posts"

const sagas = [
  ...postsSaga
]

export function* rootSaga() {
  yield all(sagas);
}
