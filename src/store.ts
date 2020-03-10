import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";

import history from "src/utils/history";

import createRootReducer from "./reducers/rootReducer";
import rootSaga from "./saga/rootSaga";

const historyMiddleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
  createRootReducer(history),
  composeEnhancer(applyMiddleware(historyMiddleware, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;