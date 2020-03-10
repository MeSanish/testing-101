import { fetchPostsEffect } from './effect';
import * as api from './api';
import sinon from 'sinon';
import { runSaga } from 'redux-saga';
import { fetchPostsAction, fillPostAction } from 'src/actionCreators/posts';
import axios from "src/utils/axios";

afterEach(() => {
  sinon.restore();
})

test('fetchPostsEffect', async () => {
  const dispatched: any[] = [];
  const expectedResponse: {}[] = [{
    id: '1',
    value: 'sanish'
  }];

  const fetchPostsAPI = sinon.stub(api, 'fetchPostsAPI').callsFake(() => {
    return new Promise((resolve, reject) => {
      resolve(expectedResponse)
    })
  });
  const callableAction = fetchPostsAction({ search: 'test', filter: { country: '1', type: '1' } });

  const result = await runSaga<any, any, any>({
    dispatch: (action) => dispatched.push(action),
    getState: () => ({ test: { a: '1' } }),
  }, fetchPostsEffect, callableAction).toPromise();
  expect(fetchPostsAPI.calledOnce).toBe(true);
  expect(result).toBe(expectedResponse);
  expect(dispatched).toStrictEqual([fillPostAction(expectedResponse)])
});

test('fetchPostsAPI', async () => {
  const getPosts = sinon.stub(axios, 'get').callsFake((url) => {
    return new Promise((resolve, reject) => {
      const data: {}[] = [{
        id: '1',
        value: 'sanish'
      }];
      resolve({ data})
    })
  });
  const params = { search: 'test', filter: { country: '1', type: '1' } };
  await api.fetchPostsAPI(params);
  expect(getPosts.calledWith('/v1/posts', { params })).toBe(true);
})