import { fetchPostsEffect } from './effect';
import { FETCH_POSTS } from 'src/actionCreators/posts.d';
import { takeLatest } from 'redux-saga/effects';

export function* fetchPostsWatcher() {
  yield takeLatest(FETCH_POSTS, fetchPostsEffect);
}

function postsWatcher() {
  return [fetchPostsWatcher()]
}

export default postsWatcher;