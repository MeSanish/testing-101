import { FILL_POSTS } from 'src/actionCreators/posts.d';

interface IPostsState {
  search: string;
  filters: Object;
  records: {
    [page: number]: Object;
  }
}

export interface ActionType<T, P> {
  type: T;
  payload: P;
  resolve?: Function;
  reject?: Function;
}

export type PostActionType = ActionType<typeof FILL_POSTS,{}[]>
const initialState: IPostsState = {
  search: '',
  filters: {
    country: '1',
    type: '1'
  },
  records: {}
}

const postsReducer = (state = initialState, action: PostActionType ) => {
  switch(action.type) {
    case FILL_POSTS:
      return {
        ...state,
        records: {
          1: action.payload
        }
      }
    default:
      return state;
  }
}

export default postsReducer;