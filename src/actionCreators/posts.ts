import { FETCH_POSTS, IFetchPostsActionPayload, IFetchPostsAction, FILL_POSTS } from "./posts.d";

export const fetchPostsAction = (payload: IFetchPostsActionPayload , resolve?: Function, reject?: Function): IFetchPostsAction => {
  return {
    type: FETCH_POSTS,
    payload,
    resolve,
    reject
  }
}

export const fillPostAction = (payload: {}[]) => {
  return {
    type: FILL_POSTS,
    payload
  }
}