import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from 'history';
import posts from "./posts";

const rootReducer = (history: History) =>
  combineReducers({
    test: () => ({ a: '1'}),
    router: connectRouter(history),
    posts
  });

export default rootReducer;