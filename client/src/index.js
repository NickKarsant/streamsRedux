import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
  <Provider props={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
