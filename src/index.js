import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import { API_WS_ROOT } from './constants';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ActionCableProvider url={API_WS_ROOT}>
        <App />
      </ActionCableProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
