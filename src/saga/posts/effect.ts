import { call, select, put } from "redux-saga/effects";
import { fetchPostsAPI } from "./api";
import { IFetchPostsAction } from "src/actionCreators/posts.d";
import { fillPostAction } from "src/actionCreators/posts";

export function* fetchPostsEffect(action: IFetchPostsAction) {
  try {
    yield select((reduxState) => reduxState.test.a);
    const data: Array<{}> = yield call(fetchPostsAPI, action.payload);
    yield put(fillPostAction(data))
    if (action.resolve) {
      action.resolve(data);
    }
    return data;
  } catch (error) {
    if (action.reject) {
      action.reject()
    }
    throw error;
  }
}
