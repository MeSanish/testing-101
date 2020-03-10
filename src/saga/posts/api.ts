import axios from 'src/utils/axios';
import { IFetchPostsActionPayload } from 'src/actionCreators/posts.d';

export const fetchPostsAPI = (payload: IFetchPostsActionPayload) => {
  return axios.get('/v1/posts', { params: payload })
    .then(({ data }) => data)
    .catch((error) => { throw error; })
}
