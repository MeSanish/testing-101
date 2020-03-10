import { all } from "redux-saga/effects";
import postsWatcher from "./posts/watcher";

export default function* rootSaga() {
  yield all([...postsWatcher()])
}