import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { App } from './App';

// store - redux

import { store } from './store/index';
// provider - react-redux

import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
