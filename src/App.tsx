import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import './App.css';
import store from 'src/store';
import history from 'src/utils/history';
// import logo from './logo.svg';
import Main from './Main';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Main />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
