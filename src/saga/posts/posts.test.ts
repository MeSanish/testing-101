import { fetchPostsEffect } from './effect';
import * as api from './api';
import sinon from 'sinon';
import { runSaga } from 'redux-saga';
import { fetchPostsAction, fillPostAction } from 'src/actionCreators/posts';

test('fetchPostsEffect', async () => {
  const dispatched: any[] = [];
  const expectedResponse: {}[] = [];

  const fetchPostsAPI = sinon.stub(api, 'fetchPostsAPI').callsFake(() => {
    return new Promise((resolve, reject) => {
      resolve(expectedResponse)
    })
  });
  const callableAction = fetchPostsAction({ search: 'test', filter: { country: '1', type: '1' } });

  const result = await runSaga({
    dispatch: (action) => dispatched.push(action),
    getState: () => ({ test: { a: '1' } }),
  }, fetchPostsEffect, callableAction).toPromise();
  expect(fetchPostsAPI.calledOnce)
  expect(result).toBe(expectedResponse);
  expect(dispatched).toStrictEqual([fillPostAction(expectedResponse)])
});
