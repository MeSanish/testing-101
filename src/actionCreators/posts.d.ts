import { ActionCallbacks } from "./actions";

export const FETCH_POSTS: "FETCH_POSTS" = "FETCH_POSTS";
export const FILL_POSTS: "FILL_POSTS" = "FILL_POSTS";

export interface IFetchPostsActionPayload {
  search: string;
  filter: IFilter;
}

interface IFilter {
  country: string;
  type: string;
}

export interface IFetchPostsAction extends ActionCallbacks {
  type: typeof FETCH_POSTS;
  payload: IFetchPostsActionPayload;
}

export interface IFillPostsAction extends ActionCallbacks{
  type: typeof FILL_POSTS;
  payload: {}[];
}