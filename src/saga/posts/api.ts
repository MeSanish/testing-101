import axios from 'src/utils/axios';

export const fetchPostsAPI = () => {
  return axios.get('/v1/posts')
    .then(({ data }) => data)
    .catch((error) => { throw error; })
}
