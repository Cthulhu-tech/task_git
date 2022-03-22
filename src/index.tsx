import { store } from './store/reducer/rootReduser';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { App } from './App';
import React from 'react';



ReactDOM.render(
      <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
      </Provider>,
      document.getElementById('root')
);
serviceWorker.unregister();